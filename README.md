# hmn-ms
<p>
<a href="https://www.npmjs.com/package/hmn-ms"><img src="https://img.shields.io/npm/v/hmn-ms.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/hmn-ms"><img src="https://img.shields.io/npm/l/hmn-ms.svg" alt="License"></a>
</p>

Convert human readable strings to milliseconds.

## Installation
```sh
$ npm install --save hmn-ms
```
NodeJS
```js
const ms = require('hmn-ms')
```
Webpack
```js
import ms from 'hmn-ms'
```

## Usage
The formatting is flexible as long as the units are valid. It ignores white-space and is case-insensitive. The following examples are equal.
```js
ms('1.5 days')
// -> 86400000
ms('1d 12h')
// -> 86400000
ms('34 HOurs110 min 600S')
// -> 86400000
```

## Documentation
### Units
Find the valid units in the table below.

Unit | Formats
--- | ---
**Second** | s, sec, secs, second, seconds
**Minute** | m, min, mins, minute, minutes
**Hour** | h, hour, hours
**Day** | d, day, days
**Week** | w, week, weeks
**Year** | y, year, years

**Note:** Months aren't supported because of inconsistency (28, 30 or 31 days).

License
----
MIT
