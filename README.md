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
5. create a .env file
5. npm build


anything under /api/... will be for the api
anything else will be for the react app
