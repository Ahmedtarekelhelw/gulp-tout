var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist/pro2/html',            // required, the root of the server file tree
    port: 1234               // required, the port to listen
});

server.start(function () {
    console.log('Server listening to', server.port);
});


// const LiveReload = require('livereload');

// const extensionsToWatch = [
//     'md',
//     'text'
// ];

// const liveReloadServer = LiveReload.createServer({
//     port: 1234,
//     debug: true,
//     exts: extensionsToWatch
// });

// Listen for errors
/*
liveReloadServer.on('error', (err) => {
  if(err.code == "EADDRINUSE") {
    console.log("The port LiveReload wants to use is used by something else.");
    process.exit(1);
  }
});
*/

// liveReloadServer.watch("./dist");