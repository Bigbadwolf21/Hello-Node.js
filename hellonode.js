const firstName = 'Ayomide';
const lastName = 'Ayodele';
let age = 23;
const course = 'Economics';
let school = 'Adekunle Ajasin University, Ondo State';
let doingAtAsuuStrikeFest = 'Software Engineering';
const where = 'ALX';
let interests = 'Technology, Christian philosophy, Movies, Books';
let roles = 'Data science, Software engineering';
let http = require("http");

// Create Server
http.createServer(function (request, response) {
    /** 
     * Send the HTTP header
     * HTTP Status: 200 : Ok
     * Content Type: text/plain
     */ 
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send response body
    response.end('Hello World\n');
    response.end('Guess who is new to Backend development with Node.js\n');
    response.end(`Me! ${firstName} ${lastName} I am ${age}years old, I am currently studying ${course} at ${school}\n`);
    response.end(`I am currently building skills in ${doingAtAsuuStrikeFest} at ${where}.\n I am interested in ${interests}, and I am currently open to mentorship and internships in ${roles} roles.`);
}).listen(8081);
// log server info to the console
console.log('Server running at http://127.0.0.1:8081/');

