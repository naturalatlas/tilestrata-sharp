# tilestrata-sharp
[![NPM version](http://img.shields.io/npm/v/tilestrata-sharp.svg?style=flat)](https://www.npmjs.org/package/tilestrata-sharp)
[![Build Status](http://img.shields.io/travis/naturalatlas/tilestrata-sharp/master.svg?style=flat)](https://travis-ci.org/naturalatlas/tilestrata-sharp)
[![Coverage Status](http://img.shields.io/coveralls/naturalatlas/tilestrata-sharp/master.svg?style=flat)](https://coveralls.io/r/naturalatlas/tilestrata-sharp)

A [TileStrata](https://github.com/naturalatlas/tilestrata) plugin for manipulating and transcoding tile images with [libvips](https://github.com/jcupitt/libvips) via [sharp](https://github.com/lovell/sharp).

```sh
# install libvips on linux
$ curl -s https://raw.githubusercontent.com/lovell/sharp/master/preinstall.sh | bash -
# install libvips on mac
brew install homebrew/science/vips --with-webp --with-graphicsmagick

$ npm install tilestrata-sharp --save
```

### Sample Usage

```js
var sharp = require('tilestrata-sharp');

server.registerLayer(function(layer) {
    layer.setName('mylayer');
    layer.registerRoute('tile.webp', function(handler) {
        layer.registerProvider(...);
        layer.registerTransform(sharp(function(image, sharp) {
            return image.resize(256).quality(80).webp();
        }));
    });
});
```

## Contributing

Before submitting pull requests, please update the [tests](test) and make sure they all pass.

```sh
$ npm test
```

## License

Copyright &copy; 2014 [Brian Reavis](https://github.com/brianreavis) & [Contributors](https://github.com/naturalatlas/tilestrata-sharp/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
