### No Image Field

We expected an multipart/data field named 'image'
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
    { "type": "FACE", "cover": false, "confidence": 0 },
    { "type": "FACE", "cover": true, "confidence": 50 },
    { "type": "FACE", "cover": true, "confidence": 95.32816314697266 }
  ]
}
```
