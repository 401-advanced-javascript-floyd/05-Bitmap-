let transform = {};

transform.transformGreyscale = bmp => {
  console.log("Transforming bitmap into greyscale", bmp);

  //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //TODO: alter bmp to make the image greyscale ...
};

transform.doTheInversion = bmp => {
  if (!bmp.colorBuffer.length) throw "Invalid Bitmap!";
  for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
    // if (bmp.colorBuffer[i + 0] > 100) {
    bmp.colorBuffer[i + 0] = 0;
    // }
    bmp.colorBuffer[i + 1] = 0;
    bmp.colorBuffer[i + 2] = 0;
    bmp.colorBuffer[i + 3] = 0;
  }
};

transform.randomColors = bmp => {
  //TODO Actually transform the image
  for (let i = 0; i < bmp.colorBuffer.length; i += 4) {
    bmp.colorBuffer[i + 0] = Math.floor(Math.random() * 255);
    bmp.colorBuffer[i + 1] = Math.floor(Math.random() * 255);
    bmp.colorBuffer[i + 2] = Math.floor(Math.random() * 255);
    bmp.colorBuffer[i + 3] = 0;
  }
};

/**
 * A dictionary of transformations
 * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
 */
module.exports = {
  greyscale: transform.transformGreyscale,
  invert: transform.doTheInversion,
  random: transform.randomColors
};