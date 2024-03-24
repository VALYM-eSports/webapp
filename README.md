# VALYM eSports - webapp

[![Super-Linter](https://github.com/VALYM-eSports/webapp/actions/workflows/super-linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Requirements

- pnpm
- node 20.9.0

## Setup project

### Install pnpm

```bash
npm i -g pnpm
```

### Install packages

```bash
pnpm i
```

### Force pnpm usage

```bash
npm run preinstall
```

### Configure .env

1. Copy/paste `.env.example` content into `.env` at root of project.
2. Update for your needs

## Main commands

### Start database

```bash
docker-compose up
```

### Start frontend + backend

```bash
pnpm dev
```
