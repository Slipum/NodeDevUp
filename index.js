#!/usr/bin/env node

const chalk = require('chalk');
const chokidar = require('chokidar');
const child_process = require('child_process');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const DEFAULT_DELAY = 50;

// Function for change processing
function handleChange(path) {
	console.log(chalk.yellow(`File changed: ${path}`));
	let timeout = null;
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		console.log(chalk.blue('Restarting application...'));
		child.kill();
		let newChild = child_process.spawn('node', [args._[0]], { stdio: 'inherit' });
		child = newChild;
		console.log(chalk.green('------------------'));
		console.log(chalk.green('New application started'));
	}, args.delay || DEFAULT_DELAY);
}

// Launching the application
let child = child_process.spawn('node', [args._[0]], { stdio: 'inherit' });

// Tracking changes
const watcher = chokidar.watch('.', {
	recursive: true,
	ignored: /node_modules/,
});

watcher.on('change', handleChange);

// Signal processing
process.on('SIGINT', () => {
	watcher.close();
	child.kill();
	process.exit();
});

// Displaying assistance information
if (args.h || args.help) {
	console.log(`
  NodeDevUp v1.0

  Usage: nodedevup [options] <file>

  Options:
    -h, --help    Display this help message.
    -d, --delay   Set the delay before restarting the application (in milliseconds).
    -i, --ignore   Ignore changes in the specified paths/files.
    -w, --watch   Specify the directories to watch.
    --debug       Enable debug mode.

  Examples:
    nodedevup app.js
    nodedevup index.ts -d 500
    nodedevup --watch src --ignore node_modules
  `);
	process.exit();
}

console.log(`Watching for changes in ${process.cwd()}`);
