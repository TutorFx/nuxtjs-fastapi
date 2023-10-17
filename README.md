<p align="center">
  <a href="https://nuxtjs-fastapi-starter.vercel.app/">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">Nuxt.js FastAPI Starter</h3>
  </a>
</p>

<p align="center">Simple Nuxt.js boilerplate that uses <a href="https://fastapi.tiangolo.com/">FastAPI</a> as the API backend.</p>

<br/>

## Introduction

This is a hybrid Nuxt.js + Python app that uses Nuxt.js as the frontend and FastAPI as the API backend. One great use case of this is to write Nuxt.js apps that use Python AI libraries on the backend.

## How It Works

The Python/FastAPI server is mapped into to Nuxt.js app under `/api/`.

The server API of Nuxt3 has been relocated to `/backend/` to make it compatible with the Vercel API routes.

This is implemented using [`nuxt.config.js` rewrites](https://github.com/tutorfx/nuxtjs-fastapi/blob/main/nuxt.config.ts) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

https://nuxtjs-fastapi-starter.vercel.app/

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftutorfx%2Fnuxtjs-fastapi%2Ftree%2Fmain)

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-nuxt-app nuxtjs-fastapi --example "https://github.com/tutorfx/nuxtjs-fastapi"
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `nuxt.config.js`).

## Learn More

To learn more about Nuxt.js, take a look at the following resources:

- [Nuxt.js Documentation](https://nuxt.com/docs) - learn about Nuxt.js features and API.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API.

You can check out [the Nuxt.js GitHub repository](https://github.com/nuxt/nuxt.js/) - your feedback and contributions are welcome!