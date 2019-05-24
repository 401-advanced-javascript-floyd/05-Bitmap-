module.exports = Bitmap;

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap (filePath)  {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.size = buffer.readInt32LE(2);
  this.pixels = buffer.readInt32LE(2);
  //... and so on
};

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
Bitmap.prototype.transform = function(operation) {
  // This is really assumptive and unsafe
  transform[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};
