# NodeDevUp

**Automatically Restart Node.js Applications on File Changes**

NodeDevUp streamlines your Node.js development experience by effortlessly detecting file changes and automatically restarting your application. This eliminates the need for manual restarts, saving you time and keeping your development workflow uninterrupted.

## Features

- **Seamless File Change Detection:** Instantly detects any modifications made to files within your project directory.
- **Effortless Automatic Restarts:** Gracefully restarts your Node.js application as soon as changes are detected, ensuring you always work with the most up-to-date code.
- **Customizable Options:** Take control with options for:
  - Delaying restarts for a specified duration
  - Ignoring specific files or directories
  - Targeting specific directories for watching
  - Enabling debug mode for enhanced troubleshooting
- **Global Installation:** Install NodeDevUp globally for effortless access from any project directory.

## Installation

1. Install NodeDevUp globally using npm:

   ```bash
   npm install -g nodedevup
   ```

## Usage

1. Navigate to your Node.js project directory in the terminal.
2. Initiate NodeDevUp with the following command structure:

   ```bash
   nodedevup [options] <file>
   ```

## Options

- `-h, --help`: Displays this comprehensive help message.
- `-d, --delay <milliseconds>`: Sets a delay (in milliseconds) before the application restarts, allowing for temporary tasks to complete before the refresh.
- `-i, --ignore <paths>`: Specifies paths or files to exclude from file change detection. Accepts comma-separated values for multiple exclusions.
- `-w, --watch <directories>`: Designates specific directories to monitor for changes, enabling focused development within designated areas of your project.
- `--debug`: Activates debug mode for enhanced logging and troubleshooting assistance.

## Examples

- Restart `app.js` upon any file change:

  ```bash
  nodedevup app.js
  ```

- Restart `index.ts` with a 500-millisecond delay:

  ```bash
  nodedevup index.ts -d 500
  ```

- Monitor the `src` directory while ignoring `node_modules`:

  ```bash
  nodedevup --watch src --ignore node_modules
  ```

## Contributing

Your contributions are greatly appreciated! Please review our contributing guidelines: CONTRIBUTING.md for detailed instructions on how to contribute to NodeDevUp.

## License

NodeDevUp is generously licensed under the MIT License, granting you extensive freedom to use, modify, and share the tool.
