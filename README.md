# UAService

## Project Overview

This project is a simple Express.js server that parses user agent strings. It uses the `ua-parser-js` library to parse the user agent string and return the result.

### File Structure

- `index.ts`: This is the main server file. It sets up an Express.js server and defines a route that parses user agent strings.

### How to Run

Install dependencies with `bun i`.
Start the server with `bun run index.ts`.

### Building image

Build the image with `docker build -t uaservice .`.

## API

The server has one route:

- `GET /`: This route accepts a user agent string as a query parameter (`ua`) or reads it from the `User-Agent` header if no query parameter is provided. It returns a parsed user agent object.

## Environment Variables

- `PORT`: The port the server listens on. Defaults to 3000 if not provided.

## Dependencies

- `express`: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- `ua-parser-js`: A useragent string parser library. It can parse almost any user agent string and extract detailed information from it.
