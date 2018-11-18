#!/bin/bash

echo '[1/2] ap server'
screen -d -m -S web-server python3 ap-server/web-api.py
echo 'Run screen: ap-server'
echo

echo '[2/2] web server'
cd web-server
screen -d -m -S ap-server python3 -m http.server 8001
echo 'Run screen: web-server'
echo

screen -ls


