# FeedGet

Demo: https://nlw-08-feed-get.vercel.app

Application of a Feedback Widget that get users feedback using an intuitive and clean interface.

<img src=".github/Cover.png" alt="Feedback Widget Cover" width="700px"/>

## Running locally

### Server

In the `server` folder create a `.env` file using the `.env.example` as example with your database and mail provider info, then run the following commands:

> For testing purposes, I recommend using [mailtrap][mailtrap] as a fake mail provider tool.

```bash

# Install dependencies
yarn

# Run prisma migrations in dev mode on you database
yarn migrate dev

# Run locally on port 3333 in dev mode
yarn dev
```

### Web

In the `web` folder create a `.env.local` file with same content as `.env.example`, then run the following commands:

```bash
# Install dependencies
yarn

# Run locally on port 3000 in dev mode
yarn dev
```

Access the application on http://localhost:3000

## Layout

You can check out the Figma design in this link: [Feedback Widget][figma]

## Tech

- [Typescript][typescript]

### Frontend

- [ViteJS][vite]
- [TailwindCSS][tailwind]
- [Phosphor Icons][phosphor_icons]
- [html2canvas][html2canvas]

### Server

- [Prisma][prisma]
- [Nodemailer][nodemailer]
- [Jest][jest]
- [SWC][swc]
- [Express][express]

## Credits

Application designed and ideated in the Next Level Week #8 - Return, and event created by [Rocketseat][rocketseat].

[typescript]: https://www.typescriptlang.org
[vite]: https://vitejs.dev
[tailwind]: https://tailwindcss.com
[html2canvas]: https://html2canvas.hertzen.com
[phosphor_icons]: https://phosphoricons.com
[prisma]: https://www.prisma.io
[nodemailer]: https://nodemailer.com/about
[jest]: https://jestjs.io
[swc]: https://swc.rs
[express]: https://expressjs.com
[mailtrap]: https://mailtrap.io
[figma]: https://www.figma.com/community/file/1102912516166573468/Feedback-Widget
[rocketseat]: https://www.rocketseat.com.br
