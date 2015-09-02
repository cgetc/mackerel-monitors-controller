#! /bin/sh
mkr monitors pull
node $1
mkr monitors push
echo "Updated at `date`"
