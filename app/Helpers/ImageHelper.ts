'use strict'

import Application from '@ioc:Adonis/Core/Application'

let ImageHelper = exports = module.exports = {}

ImageHelper.Upload = function (image, path) {

  if (image && typeof (image) !== 'string') {
    let rnd = Math.random();
    rnd = Math.ceil(((rnd < 1.0) ? rnd : (rnd % Math.floor(rnd))) * 1000000000);
    let name = `${image.clientName}_ ${rnd}.${image.extname}`;
    image.clientName = name;

    image.move(Application.tmpPath(path))
    return `${path}/${name}`

  }
  else {
    return image;
  }


}

export default ImageHelper