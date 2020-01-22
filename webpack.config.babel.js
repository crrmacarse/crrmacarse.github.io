// @TODO: Figure out how to make this work
// "hot": "webpack-dev-server --open --hot --profile --progress --colors --config=webpack.config.babel.js --env=hot",
// "github-build": "webpack --profile --progress --config=webpack.config.babel.js --env=github-pages",
// "prod": "webpack --profile --progress --config=webpack.config.babel.js --env=production",

export default function(env) { require(`./compiler/${env}.js`) }
