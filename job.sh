#!/bin/bash

echo ----------------------------
echo Job starting...
echo
echo

node_modules/.bin/phantomjs scrape.js
node send_mail.js

echo
echo ----------------------------
echo job finished
echo ----------------------------
