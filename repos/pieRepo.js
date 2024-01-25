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
    // method to get a single piece of data
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
    // search method
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
          if (err) {
            reject(err);
          }
          else {
            let pies = JSON.parse(data);
            // Perform search
            if (searchObject) {
              pies = pies.filter(
                p => (searchObject.id ? p.id == searchObject.id : true) &&
                  (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name) >= 0 : true)); // case insensitive search
            }
    
            resolve(pies);
          }
        });
    },
    // insert method
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
          if (err) {
            reject(err);
          }
          else {
            let pies = JSON.parse(data);
            pies.push(newData);
            fs.writeFile(FILE_NAME, JSON.stringify(pies), function (err) {
              if (err) {
                reject(err);
              }
              else {
                resolve(newData);
              }
            });
          }
        });
    },
};
  
module.exports = pieRepo;