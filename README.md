# Debug Remote

[![CI Status](http://img.shields.io/travis/matteocrippa/Debug-Remote.svg?style=flat)](https://travis-ci.org/matteocrippa/Debug-Remote)
[![License](https://img.shields.io/cocoapods/l/Debug.svg?style=flat)](http://cocoapods.org/pods/Debug)

Debug Remote is a node.js based extension for [](), a Swift library to manage auto disabled logging in release envs.

Now the libs support also remote logging, this comes very useful if you have to manage logging when you can't attach your device to XCode (eg. iBeacons logging, Apple TV, etc.)

# Installation

Simple clone the repository and then exec

```shell
$ npm install
$ node server.js
```

In terminal will be shown a link like: `http://asdswfd.localtunne.me`, copy this url in your Swift app and now you can start easily to remote logging.

## Author

Matteo Crippa, @ghego20

## License

Debug is available under the MIT license. See the LICENSE file for more info.
