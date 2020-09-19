const fs = require('fs');
const path = require('path');

const readFile = (fileName) => new Promise((resolve, reject) => {
  // метод readFile - асинхронное чтение файла, потоки нам тут ни к чему
  fs.readFile(path.join(__dirname, '../data', fileName), { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      // при JSON.parse() так же может возникнуть ошибка, если сам json будет невалидным
      try {
        const users = JSON.parse(data);
        resolve(users);
        return;
      } catch (e) {
        // console.log('\n JSON inconsistent or missing');
        // res.set({ 'content-type': 'application/json; charset=utf-8' });
        reject(e);
      }
    }
  });
});

module.exports = readFile;
