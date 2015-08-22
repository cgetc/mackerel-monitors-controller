# Mackerel Monitors Retire

# DESCRIPTION
It makes to retire Mackerel Monitors.

# REQUIREMENT
* mkr
* node.js

# USAGE
## setup mkr

```
export MACKEREL_APIKEY=<APIキー>
```

## define monitors to retire
Make monitors-target-name.json file like this on same directory.

```
["monitor-name-exclude-1","monitor-name-exclude-2"]
```

# USAGE
## Retire Mackerel Monitors
remove and backup monitors.

```
sh update.sh maintainance
```

##  Comeback Mackerel Monitors
restore monitors backuped.
```
sh update.sh working
```
