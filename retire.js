var fs = require('fs');
var monitors = require('./monitors');
var targetNames = require('./monitors-target-name');
var backup = [];
monitors.monitors = monitors.monitors.filter(function (monitor) {
    if (targetNames.indexOf(monitor.name) < 0) return true;
    backup.push(monitor);
    return false;
});
fs.writeFileSync('./monitors.json', JSON.stringify(monitors, null, 4));
fs.writeFileSync('./monitors-backup.json', JSON.stringify(backup, null, 4));
