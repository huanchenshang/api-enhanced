const app = require('./app.js');

module.exports = async (req, res) => {
  // 确保请求能够正确分发给后端的 Express 实例
  if (typeof app === 'function') {
    return app(req, res);
  } else if (app && typeof app.serveNcmApi === 'function') {
    return app.serveNcmApi(req, res);
  }
  res.status(500).send('Server initialization failed.');
};
