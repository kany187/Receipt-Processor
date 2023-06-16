const http = require('http');
const app = require('./app');


const httpServer = http.createServer(app);
const port = 4000;

httpServer.listen(port, () => {
    console.log(`Listening to port ${port} ...`)
})


module.exports = httpServer;