const { getErrorData } = require('../../base');

module.exports = function () {
    return getErrorData(100001, '后台内部错误');
};