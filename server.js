const http= require('http');
const app = require('./server/app');
const config = require('./configs/default');
const port = config.port;
const server = http.createServer(app);
server.listen(port);
console.log("Server is running on localhost:"+port);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
  }