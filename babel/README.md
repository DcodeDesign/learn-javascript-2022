```
mkdir package-babel
cd package-babel
npm init -y
touch babel.config.js
npm i @babel/core @babel/cli @babel/core @babel/preset-env
npm run babel
mkdir src
mkdir dist
touch index.html
{
 echo '<!DOCTYPE html>'
 echo '<html lang="en">'
 echo '<head>'
 echo '   <meta charset="UTF-8">'
 echo '   <meta http-equiv="X-UA-Compatible" content="IE=edge">'
 echo '   <meta name="viewport" content="width=device-width, initial-scale=1.0">'
 echo '   <title>Document</title>'
echo '</head>'
echo '<body>'
echo ''
echo '</body>'
echo '</html>'

} > index.html
```
