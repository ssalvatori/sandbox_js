#!/bin/bash

echo "Clean folders"
rm -rf ../js/libs/*
#rm -rf ../css/themes/smoothness

echo "Install dependencies using bower"
bower install

echo "Copying JS files"
cp -rf ../js/libs/requirejs/require.js ../js/libs/require.js
cp -rf ../js/libs/requirejs-text/text.js ../js/libs/text.js
cp -rf ../js/libs/underscore-amd/underscore.js ../js/libs/underscore.js
cp -rf ../js/libs/backbone-amd/backbone.js ../js/libs/backbone.js
cp -rf ../js/libs/layoutmanager/backbone.layoutmanager.js ../js/libs/backbone.layoutmanager.js
cp -rf ../js/libs/jquery/jquery.js ../js/libs/jquery.js
#cp -rf ../js/libs/jquery-ui/ui/jquery-ui.js ../js/libs/jquery-ui.js
#cp -rf ../js/libs/jquery-ui/ui/jquery.ui.autocomplete.js ../js/libs/jquery.ui.autocomplete.js


echo "Copying CSS files"
#cp -rf ../js/libs/bootstrap/docs/assets/css/bootstrap.css ../css/bootstrap.css
#cp -rf ../js/libs/bootstrap/docs/assets/css/bootstrap-responsive.css ../css/bootstrap-responsive.css
#cp -rf ../js/libs/jquery-ui/themes/smoothness  ../css/themes

echo "Copying MAP files"
#cp -rf ../js/libs/underscore-amd/underscore-min.map ../js/libs/underscore-min.map
#cp -rf ../js/libs/jquery/jquery.min.map ../js/libs/jquery.min.map
#cp -rf ../js/libs/backbone-amd/backbone-min.map ../js/libs/backbone-min.map

echo "Copying IMG files"
#cp -rf ../js/libs/bootstrap/img/* ../img/

echo "Moving bootstrap files"
#cp -rf ../js/libs/bootstrap/js/bootstrap.js ../js/libs/bootstrap.js
#cp -rf ../js/libs/bootstrap/docs/assets/js/bootstrap.js ../js/libs/bootstrap.js

echo "Removing files"
rm -rf ../js/libs/requirejs
rm -rf ../js/libs/requirejs-text
rm -rf ../js/libs/jquery
#rm -rf ../js/libs/jquery-ui
rm -rf ../js/libs/bootstrap
rm -rf ../js/libs/underscore-amd
rm -rf ../js/libs/backbone-amd
rm -rf ../js/libs/layoutmanager