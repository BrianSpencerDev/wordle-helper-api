const app = require('./index');
const {readFile} = require('fs/promises');
const http = require("http");
const https = require("https");

// app.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })

const httpServer = http.createServer(app);
  
httpServer.listen(3000, () => {
    logHandler.log("http", "http server listening on port 3000");
});

if (process.env.NODE_ENV === "production") {
    const privateKey = await readFile(
    "/etc/letsencrypt/live/wordleapi.brian-spencer.com/privkey.pem",
    "utf8"
    );
    const certificate = await readFile(
    "/etc/letsencrypt/live/wordleapi.brian-spencer.com/cert.pem",
    "utf8"
    );
    const ca = await readFile(
    "/etc/letsencrypt/live/wordleapi.brian-spencer/chain.pem",
    "utf8"
    );

    const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(3080, () => {
    logHandler.log("http", "https server listening on port 3080");
    })}