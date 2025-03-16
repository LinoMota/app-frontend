#!/bin/sh

echo "script de setup"

cd /app/

npm run build

cp -r /app/dist/* /var/www/html/

rm -rf /app/node_modules

nginx -g 'daemon off;'
