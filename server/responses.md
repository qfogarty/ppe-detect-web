### No Image Field

We expected an multipart/form-data field named 'image'
status code: 422

```json
{ "errors": ["No image provided!"], "detected": [] }
```

/

### Not an image

Looks like you uploaded something bad
status code: 422

```json
{ "errors": ["Not an image!"], "detected": [] }
```

/

### No Body parts found

You probably uploaded an image of a truck
status code: 200

```json
{ "errors": ["No Body parts found"], "detected": [] }
```

/

### No faces covered

status code: 200

```json
{
  "errors": [],
  "detected": [
    { "type": "FACE", "cover": false, "confidence": 0 },
    { "type": "FACE", "cover": false, "confidence": 0 }
  ]
}
```

/

### Some faces covered

status code: 200

```json
{
  "errors": [],
  "detected": [
    { "type": "FACE", "cover": false, "confidence": 0, "where": [] },
    {
      "type": "FACE",
      "cover": true,
      "confidence": 50,
      "where": {
        "width": 0.0921301394701004,
        "height": 0.10804252326488495,
        "left": 0.45573854446411133,
        "top": 0.2998284101486206
      }
    },
    {
      "type": "FACE",
      "cover": true,
      "confidence": 95.32816314697266,
      "where": {
        "width": 0.06171159818768501,
        "height": 0.07900428771972656,
        "left": 0.7939821481704712,
        "top": 0.3421837091445923
      }
    }
  ]
}
```
