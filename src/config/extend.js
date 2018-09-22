const view = require('think-view');
const model = require('think-model');
const fetch = require('think-fetch');
const email = require('think-email');
const cache = require('think-cache');
const session = require('think-session');
// 1.由于某些项目下并不需要 View 的功能，并没有直接内置 View 的功能，而是通过 Extend 和 Adapter 来实现的。
// 2.框架默认没有提供模型的功能，需要加载对应的扩展才能支持，对应的模块为 think-model。
// 添加模型的扩展后，会添加方法 think.Model、think.model、ctx.model、controller.model、service.model。
module.exports = [
  view, // make application support view
  model(think.app),
  fetch, // HTTP request client.
  email,
  cache,
  session
];
