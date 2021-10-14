const { exec } = require('child_process');
const keepAlive = require('./http');
var yourscript = exec('sh haven.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        })
keepAlive();
