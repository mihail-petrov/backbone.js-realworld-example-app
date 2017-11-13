var express = require('express');
var application = express();
const PORT = 3456;

application.use(express.static(__dirname + '/../src'));
application.use('scripts', express.static(__dirname + '/../node_modules/'));

application.listen(PORT, function() {
    console.log("Server started on port " + PORT);
})