<?php

use Aws\Exception\AwsException;
use Aws\S3\S3Client;
use Aws\Rekognition\RekognitionClient;

//setup clients
$config =
    [
        'version' => 'latest',
        'region' => $_ENV['AWS_REGION'],
        'credentials' => [
            'key'    => $_ENV['AWS_ACCESS_KEY_ID'],
            'secret' => $_ENV['AWS_SECRET_ACCESS_KEY'],
        ],
        'http'    => [
            'verify' => __DIR__ . '/../cacert.pem'
        ]
    ];

$s3Client = new S3Client($config);
$rClient = new RekognitionClient($config);


//always respond with this
$response = [
    "errors" => [],
    "detected" => []
];

if (!isset($_FILES['image'])) {
    http_response_code(422);
    $response['errors'][] = 'No image provided!';
    echo json_encode($response);
    return;
}

if (!@getimagesize($_FILES['image']['tmp_name'])) {
    http_response_code(422);
    $response['errors'][] = 'Not an image!';
    echo json_encode($response);
    return;
}

$file_name = $_FILES['image']['name'];
$temp_file_location = $_FILES['image']['tmp_name'];
$s3Object = $s3Client->putObject([
    'Bucket' => $_ENV['S3_BUCKET'],
    'Key'    => $file_name,
    'SourceFile' => $temp_file_location
]);

//detect all the things
$result = $rClient->detectProtectiveEquipment([
    'Image' => [
        'S3Object' => [
            'Bucket' => $_ENV['S3_BUCKET'],
            'Name' => $file_name
        ],
    ],
    'SummarizationAttributes' => [
        'MinConfidence' => 0, // REQUIRED
        'RequiredEquipmentTypes' => ['FACE_COVER'], // REQUIRED
    ]
]);

//try and format a reponse :D
try {
    foreach ($result['Persons'] as $person) {
        foreach ($person['BodyParts'] as $bodypart) {
            //only keep faces
            if ($bodypart['Name'] != 'FACE') {
                continue;
            }

            //we construct a face
            $face = ['type' => 'FACE', 'cover' => false, 'confidence' => 0, 'where' => []];

            //only keep items that have EquipmentDetections
            if (isset($bodypart['EquipmentDetections']) && !empty($bodypart['EquipmentDetections'])) {

                //gotsta have the quipment
                foreach ($bodypart['EquipmentDetections'] as $equipment) {
                    if ($equipment['Type'] == 'FACE_COVER' && isset($equipment['BoundingBox'])) {
                        $face['where'] = [
                            'width' => $equipment['BoundingBox']['Width'],
                            'height' => $equipment['BoundingBox']['Height'],
                            'left' => $equipment['BoundingBox']['Left'],
                            'top' => $equipment['BoundingBox']['Top']
                        ];
                    }

                    // //they gotta face hugger?
                    if ($equipment['Type'] == 'FACE_COVER' && isset($equipment['CoversBodyPart'])) {
                        $face['cover'] = true;
                        $face['confidence'] = $equipment['CoversBodyPart']['Confidence'];
                    }
                }
            }

            $response['detected'][] = $face;
        }
    }
} catch (\Throwable $th) {
    http_response_code(500);
    $response['errors'][] = 'Something went wrong';
}

if (empty($response['detected'])) {
    $response['errors'][] = 'No Body parts found';
}

// var_dump($result);
echo json_encode($response);
