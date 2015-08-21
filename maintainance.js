var fs = require('fs');
var monitors = require('./monitors');
var targetNames = require('./monitors-target-name');
var maintainance = [];
monitors.monitors = monitors.monitors.filter(function (monitor) {
    if (targetNames.indexOf(monitor.name) < 0) return true;
    maintainance.push(monitor);
    return false;
});
fs.writeFileSync('./monitors.json', JSON.stringify(monitors, null, 4));
fs.writeFileSync('./monitors-maintainance.json', JSON.stringify(maintainance, null, 4));
