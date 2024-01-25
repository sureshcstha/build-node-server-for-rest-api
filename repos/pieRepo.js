let fs = require('fs'); // fs is built in node module that know how to work with reading and writing files

const FILE_NAME = './assets/pies.json';

let pieRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
          if (err) {
            reject(err);
          }
          else {
            resolve(JSON.parse(data));
          }
        });
    },
};
  
module.exports = pieRepo;