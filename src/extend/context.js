/**
 * Created by arter on 2017/7/11.
 * 我们想给 ctx 添加个 isMobile 方法来判断当前请求是不是手机访问
 */
const moment = require('moment');
const path = require('path');
moment.locale('zh-cn');
module.exports = {
  get isMobile() {
    if (Number(this.config('setup.ISM')) === 0) {
      return false;
    }
    const userAgent = this.userAgent.toLowerCase();
    const mList = ['iphone', 'android'];
    return mList.some(item => userAgent.indexOf(item) > -1);
  },
  moment: moment,
  cmswing: require(path.join(think.ROOT_PATH, 'package.json'))
};
