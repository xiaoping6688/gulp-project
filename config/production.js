/**
 * 生产环境
 */

var ENV = {};

ENV.TYPE = 'production';
ENV.ASSETS_URI = './';
ENV.BASE_URI = 'http://127.0.0.1/api';

if (typeof module === 'object' && module && typeof module.exports === 'object') {
  module.exports = ENV;
}
