const livereload = require("livereload");
const path = require('path');
const express = require("express");
const dotenv = require('dotenv')



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// //make way for some custom css, js and images
// app.use('/css', express.static(__dirname + '/public/css'));
// app.use('/js', express.static(__dirname + '/public/js'));
// app.use('/images', express.static(__dirname + '/public/images'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a livereload server
const livereloadServer = livereload.createServer();
livereloadServer.watch(path.join(__dirname, '../public')); // Watch the 'public' directory for changes