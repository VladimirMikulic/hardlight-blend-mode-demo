const sharp = require('sharp');

async function main() {
  await sharp('./images/water.png')
    .composite([
      { input: './images/ice.png', blend: 'hard-light' },
      { input: './images/fish.png', blend: 'over' }
    ])
    .jpeg({ quality: 100, chromaSubsampling: '4:4:4' })
    .toFile('./outputs/sharp.jpg');
}

main();
