const axios = require('axios');
const _ = require('lodash');
module.exports = {
  curl(option) {
    let ctx = this;
    option = _.merge({
      headers: {
        Cookie: ctx.headers.cookie || '',
        referer: ctx.headers.referer || '',
      },
      responseType: 'json',
    }, option);

    return new Promise((resolve, reject) => {
      axios(option)
        .then((res => {
          resolve(res);
        }))
        .catch((err) => {
          resolve({
            code: 500,
            data: err.config.data,
            msg: `error: ${err.config.url}`
          })
        });
    })
  }

}