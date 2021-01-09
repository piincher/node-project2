const EventEmitter = require('events');
const http = require('http');
class sales extends EventEmitter {
	constructor() {
		super();
	}
}
const myEmitter = new EventEmitter();
myEmitter.on('newSale', () => {
	console.log('there was a new sale ');
});
myEmitter.on('newSale', () => {
	console.log('costumer name: piincher');
});

myEmitter.on('newSale', (stocker) => {
	console.log(`there are now ${stocker} items left in stock`);
});
myEmitter.emit('newSale', 9);

const server = http.createServer();

server.on('request', (req, res) => {
	console.log('Request received ');
	res.end('listen the server');
});

server.on('request', (req, res) => {
	res.end('another request ');
});
server.on('close', () => {
	console.log('server close ');
});
server.listen(8000, '127.0.0.1', () => {
	console.log('waiting for request ');
});
