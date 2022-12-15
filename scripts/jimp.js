const Jimp = require('jimp');

async function main() {
  const waterImg = await Jimp.read('./images/water.png');
  const iceImg = await Jimp.read('./images/ice.png');
  const fishImg = await Jimp.read('./images/fish.png');

  waterImg
    .composite(iceImg, 0, 0, { mode: Jimp.BLEND_HARDLIGHT })
    .composite(fishImg, 0, 0)
    .write('./outputs/jimp.jpg');
}

main();
