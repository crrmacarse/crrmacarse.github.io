PKG_NAME=`node -p "require('./package.json').name"`
PKG_VERSION=`node -p "require('./package.json').version"`
PKG_DESCRIPTION=`node -p "require('./package.json').description"`
PKG_AUTHOR=`node -p "require('./package.json').author"`
PROJECT_NAME="${PKG_NAME} ${PKG_VERSION}"

echo
echo 'Welcome!'
echo ~~~~~~~~~~~~~~~~~~~~~~~~~
echo project: $PROJECT_NAME
echo description: $PKG_DESCRIPTION
echo author: $PKG_AUTHOR
echo ~~~~~~~~~~~~~~~~~~~~~~~~~
echo
echo

echo Running the automated initialization..

echo Installing dependencies..
npm install --silent
echo Finalizing..
echo All done!
echo Important note: Create a .env file on the root folder that is identical with .env.example

echo
echo -------------------------
echo To start the development mode:
echo npm run hot
echo -------------------------
echo To build the production bundle:
echo npm run prod
echo
echo Follow me on github: github.com/crrmacarse
