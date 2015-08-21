var fs = require('fs');
var monitors = require('./monitors');
var maintainance = require('./monitors-maintainance');
maintainance.forEach(function (monitor) {
    monitors.monitors.push(monitor);
});
fs.writeFileSync('./monitors.json', JSON.stringify(monitors, null, 4));
