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
    // get a single piece of data
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
          if (err) {
            reject(err);
          }
          else {
            let pie = JSON.parse(data).find(p => p.id == id);
            resolve(pie);
          }
        });
    },
};
  
module.exports = pieRepo;