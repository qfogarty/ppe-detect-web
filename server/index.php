<?php

use Aws\Exception\AwsException;
use Aws\S3\S3Client;

$s3Client = new S3Client([
    'version' => 'latest',
    'region' => $_ENV['S3_REGION'],
    'credentials' => [
        'key'    => $_ENV['AWS_ACCESS_KEY_ID'],
        'secret' => $_ENV['AWS_SECRET_ACCESS_KEY'],
    ],
    'http'    => [
        'verify' => __DIR__ . '/../cacert.pem'
    ]
]);

if (isset($_FILES['image'])) {
    $file_name = $_FILES['image']['name'];
    $temp_file_location = $_FILES['image']['tmp_name'];

    $result = $s3Client->putObject([
        'Bucket' => $_ENV['S3_BUCKET'],
        'Key'    => $file_name,
        'SourceFile' => $temp_file_locatione
    ]);
}

// /https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-rekognition-2016-06-27.html#detectprotectiveequipment

// $result = $client->detectProtectiveEquipment([
//     'Image' => [ // REQUIRED
//         'Bytes' => <string || resource || Psr\Http\Message\StreamInterface>,
//         'S3Object' => [
//             'Bucket' => '<string>',
//             'Name' => '<string>',
//             'Version' => '<string>',
//         ],
//     ],
//     'SummarizationAttributes' => [
//         'MinConfidence' => <float>, // REQUIRED
//         'RequiredEquipmentTypes' => ['<string>', ...], // REQUIRED
//     ],
// ]);
