console.log(process.env);
const path = require('path');
const cp = require('child_process');

const subroutes = {
    
    "6":path.join(__dirname,'next-text','6-fetching-data')
}

cp.spawn('bash', [subroutes[6]+'/run.sh'], {
	cwd: subroutes[6],
	detached: false,
	stdio: 'inherit'
});

console.log('subroutes: ', subroutes);

console.log();