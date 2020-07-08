# cfriedline/theme-dracula

Cookiecutter-based Dracula Theme for JupyterLab

This theme is based _heavily_ on https://github.com/dracula/jupyterlab

## Prerequisites

- JupyterLab 2.x

## Installation

```bash
jupyter labextension install @cfriedline/theme-dracula
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
