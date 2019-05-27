module.exports = Bitmap;
const transforms = require("./transform");

function Bitmap(filePath) {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
 
  this.buffer = buffer;
  console.log("Buffer:", buffer);
  this.type = buffer.toString("utf-8", 0, 2);
  console.log("Type:", this.type);
  this.size = buffer.readInt32LE(2);
  console.log("Size:", this.size);
  this.pixels = buffer.readInt32LE(28);
  console.log("Pixels:", this.pixels);
  this.width = buffer.readInt32LE(18);
  console.log("Width: ", this.width);
  this.colors = buffer.readInt16LE(50);
  console.log("Colors:", this.colors);
  this.offset = buffer.readInt32LE(0xa);
  console.log("Offset: ", this.offset);
  this.colorBuffer = buffer.slice(54, this.offset);
  console.log("Color Buffer: ", this.colorBuffer);
  this.pixelBuffer = buffer.slice(this.offset);
  console.log("Pixel Buffer: ", this.pixelBuffer);
 
};

Bitmap.prototype.transform = function(operation) {
  transforms[operation](this);
  console.log(operation);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};