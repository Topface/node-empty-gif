# empty gif module

This is equivalent for [nginx empty_gif module](http://wiki.nginx.org/HttpEmptyGifModule),
it allows you to return minimal transparent gif 1x1. You may need it if you don't want to
show results, but simply want to count request without errors on client.

## Installation

```
npm install empty-gif
```

## API

Module exposes buffer with empty gif so you may do whatever you want.
Usually you want to write that buffer to http response.

```javascript
var gif = require("empty-gif"),
    fs  = require("fs");

fs.writeFile("empty.gif", gif);
```

## Authors

* [Ian Babrou](https://github.com/bobrik)
