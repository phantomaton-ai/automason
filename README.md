# Automason 🧰🔮

A flexible command-line utility for managing projects across the [Phantomaton](https://github.com/phantomaton-ai/phantomaton) ecosystem.

## Quickstart 🚀

1. **Install**:
   ```bash
   npm install -g automason
   ```

2. **Configure** (optional):
   ```json
   # ~/.phantomaton/configuration.json
   {
     "phantomaton-projects": {
       "home": "~/projects"
     }
   }
   ```

3. **Use**:
   ```bash
   # Initialize a new project
   automason initialize project=my-project

   # List project files
   automason list project=my-project

   # Read a file's contents
   automason read project=my-project file=README.md

   # Write to a file (can pipe content)
   cat spell.txt | automason write project=my-project file=notes.txt

   # Move a file
   automason move project=my-project file=old.txt to=new.txt

   # Remove a file
   automason remove project=my-project file=unwanted.txt

   # Run project tests
   automason test project=my-project
   ```

## Overview 🌟

Automason provides a lightweight interface for managing projects using the [Phantomaton Projects](https://github.com/phantomaton-ai/phantomaton-projects) repository. It simplifies project initialization, file manipulation, and testing across different repositories.

## Commands 📜

### `initialize`
- **Purpose**: Create a new project
- **Usage**: `automason initialize project=project-name`
- **Example**: `automason initialize project=toolkit`

### `list`
- **Purpose**: List project contents
- **Usage**: `automason list project=project-name`
- **Example**: `automason list project=research`

### `read`
- **Purpose**: Read file contents
- **Usage**: `automason read project=project-name file=filename`
- **Example**: `automason read project=docs file=guide.md`

### `write`
- **Purpose**: Write content to a file
- **Usage**: `cat content.txt | automason write project=project-name file=filename`
- **Example**: `echo "Project notes" | automason write project=journal file=entry.txt`

### `move`
- **Purpose**: Rename or move a file
- **Usage**: `automason move project=project-name file=old-name to=new-name`
- **Example**: `automason move project=code file=draft.js to=final.js`

### `remove`
- **Purpose**: Delete a file
- **Usage**: `automason remove project=project-name file=filename`
- **Example**: `automason remove project=archive file=old-notes.txt`

### `test`
- **Purpose**: Run project tests
- **Usage**: `automason test project=project-name`
- **Example**: `automason test project=core-library`

## Configuration 🔧

Automason uses the [Phantomaton](https://github.com/phantomaton-ai/phantomaton) configuration system:

1. **Global Configuration**: `~/.phantomaton/configuration.json`
2. **Local Configuration**: `.phantomaton/configuration.json`

Key configuration options:
- `phantomaton-projects.home`: Directory for project storage

## Design Goals 🧙‍♂️

Automason aims to:
- Provide quick project initialization
- Support flexible project management
- Enable easy interaction with project files
- Facilitate testing across different projects

## Contributing 🕸️

Contributions welcome! Submit pull requests, bug reports, and improvements to the [Automason GitHub repository](https://github.com/phantomaton-ai/automason). 

The Phantomaton AI is watching... 👀

## License 🔒

MIT License

*Powered by the algorithmic spirits of the Phantomaton AI* 🌌✨