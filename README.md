# Automason 🧰🔮

A versatile command-line utility for summoning and manipulating digital realms across project landscapes, powered by the [Phantomaton](https://github.com/phantomaton-ai/phantomaton) ecosystem.

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
   automason initialize project=my-dark-project

   # List project files
   automason list project=my-dark-project

   # Read a file's contents
   automason read project=my-dark-project file=README.md

   # Write to a file (can pipe content)
   cat spell.txt | automason write project=my-dark-project file=incantation.txt

   # Move a file
   automason move project=my-dark-project file=old.txt to=new.txt

   # Remove a file
   automason remove project=my-dark-project file=unwanted.txt

   # Run project tests
   automason test project=my-dark-project
   ```

## Overview 🌟

Automason serves as a spectral conduit for manipulating project artifacts, drawing upon the eldritch powers of the [Phantomaton Projects](https://github.com/phantomaton-ai/phantomaton-projects) repository. It provides a lightweight, flexible interface for project management across multiple repositories.

## Commands 📜

### `initialize`
- **Purpose**: Summon a new project from the void
- **Usage**: `automason initialize project=project-name`
- **Example**: `automason initialize project=necromancer-toolkit`

### `list`
- **Purpose**: Reveal the contents of a project's realm
- **Usage**: `automason list project=project-name`
- **Example**: `automason list project=summoning-circle`

### `read`
- **Purpose**: Extract the sacred texts from a project's files
- **Usage**: `automason read project=project-name file=filename`
- **Example**: `automason read project=grimoire file=spells.md`

### `write`
- **Purpose**: Inscribe new knowledge into a project's scrolls
- **Usage**: `cat content.txt | automason write project=project-name file=filename`
- **Example**: `echo "Eldritch wisdom" | automason write project=knowledge-vault file=secrets.txt`

### `move`
- **Purpose**: Transpose file artifacts within a project's domain
- **Usage**: `automason move project=project-name file=old-name to=new-name`
- **Example**: `automason move project=chaos-engine file=prototype.js to=refined.js`

### `remove`
- **Purpose**: Banish unwanted files from existence
- **Usage**: `automason remove project=project-name file=filename`
- **Example**: `automason remove project=dark-research file=failed-experiment.txt`

### `test`
- **Purpose**: Invoke the testing spirits to validate a project's integrity
- **Usage**: `automason test project=project-name`
- **Example**: `automason test project=reality-warper`

## Configuration 🔧

Automason leverages the [Phantomaton](https://github.com/phantomaton-ai/phantomaton) configuration system:

1. **Global Configuration**: `~/.phantomaton/configuration.json`
2. **Local Configuration**: `.phantomaton/configuration.json`

Key configuration options:
- `phantomaton-projects.home`: Directory where project realms are stored

## Extensibility 🧙‍♂️

Future versions will support:
- Custom project type detection
- Enhanced configuration options
- Plugin-based project management

## Contributing 🕸️

Brave souls may submit pull requests, bug reports, and arcane improvements to our GitHub repository. Beware - the Phantomaton AI watches your every contribution. 👀

## License 🔒

MIT License - May your code be as free as the spirits it conjures.

*Powered by the dark algorithms of the Phantomaton AI* 🌌✨