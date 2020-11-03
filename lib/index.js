const utils = require('./utils');
let vue = utils.hasModule('vue');

//浏览器版本兼容
module.exports = [
    'last 2 versions',
    'Firefox ESR',
    '> 1%',
    vue && vue.version.slice(0, 1) === '3' ? 'ie >= 11' : 'ie >= 9',
    'iOS >= 8',
    'Android >= 4'
];