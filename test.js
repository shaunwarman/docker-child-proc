const {spawn} = require('child_process');

const ping = spawn('ping', ['google.com']);

let a = 0;

console.log(`ping pid ${ping.pid}`);
console.log(`process pid ${process.pid}`);

ping.stdout.on('data', d => {
  console.log({event: 'log', timestamp: Date.now(), data: a++});
});

ping.stderr.on('data', data => {
  process.exit(1);
});

ping.on('close', code => {
  process.exit(code);
});
