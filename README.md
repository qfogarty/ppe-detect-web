#PPE THINGY

Add a vhost

```
<VirtualHost *:80>

  ServerName  ppe.loc
  ServerAlias www.ppe.loc
  ServerAlias ppe.*.xip.io
  ServerAlias www.ppe.*.xip.io

  DocumentRoot /PATH/ppe-detect-web/build

  <Directory /PATH/ppe-detect-web/build>
    Options Indexes MultiViews FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>

</VirtualHost>
```

1. replace PATH in VHOST
2. nvm use
3. npm install
4. composer install
5. create a .env file and get the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY keys from the pinned slack message
5. npm build

anything under the url `/api/` will be for the api
If you post multipart form data with the file data name as 'image' you will get back a rekognition in response
