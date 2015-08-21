# Mackerel Monitors maintainance or working controller

# DESCRIPTION
It makes to controll maintainance or working of Mackerel Monitors.
Maintainance is remove and backup monitors.
Working is restore backuped monitors.

# REQUIREMENT
* mkr
* node

# USAGE
Make monitors-target-name.json file like this on same directory.

```
["monitor-name-exclude-1","monitor-name-exclude-2"]
```

# USAGE
## Update to maintainance Mackerel Monitors

```
sh update.sh maintainance
```

##  Update to working Mackerel Monitors

```
sh update.sh working
```
