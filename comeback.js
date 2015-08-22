var fs = require('fs');
var monitors = require('./monitors');
var backup = require('./monitors-backup');
backup.forEach(function (monitor) {
    monitors.monitors.push(monitor);
});
fs.writeFileSync('./monitors.json', JSON.stringify(monitors, null, 4));
