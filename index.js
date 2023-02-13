// 响应式对象
const { reactive, watchFns } = require('./utils/reactive');
const promise = require('./utils/promise');
const debounce = require('./utils/debounce');
const throttle = require('./utils/throttle');
const deepClone = require('./utils/deepClone');
const eventBus = require('./utils/eventBus');
const downloadFile = require('./utils/downloadFile');
const jsonToExcel = require('./utils/jsonToExcel');

module.exports = {
  reactive,
  watchFns,
  promise,
  debounce,
  throttle,
  deepClone,
  eventBus,
  downloadFile,
  jsonToExcel
};

export default {
  reactive,
  watchFns,
  promise,
  debounce,
  throttle,
  deepClone,
  eventBus,
  downloadFile,
  jsonToExcel
};
