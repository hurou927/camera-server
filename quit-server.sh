#!/bin/bash


echo '[1/2] close ap server'
screen -S ap-server -X quit

echo '[1/2] close web server'
screen -S web-server -X quit

screen -ls

