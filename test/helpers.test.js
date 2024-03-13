const path = require('path');

function getAbsolutePath(filePath) {
  return path.resolve(process.cwd(), filePath);
}

module.exports = {
  getAbsolutePath,
};
