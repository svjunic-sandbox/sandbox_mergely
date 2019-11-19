#!/bin/bash

wget -O docs/js/jquery.min.js       https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
wget -O docs/js/codemirror.min.js   https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.js
wget -O docs/css/codemirror.css     https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.css
wget -O docs/js/searchcursor.min.js https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/addon/search/searchcursor.min.js

cp ./node_modules/mergely/lib/mergely.css docs/css/mergely.css
cp ./node_modules/mergely/lib/mergely.js docs/js/mergely.js
