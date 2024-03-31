



Peer Reviewer: Jayvon Khuth

Peer Review: There are a couple errors I find when looking at the website, for example whenever I search for a city that doesn't exist, it crashes the whole website, and also when I make the website go into mobile mode, it isn't responsive at all. I recommend using the tailwind responsive classes to make everything stack on each other, like your 5 day forecast can be all in one column from top to bottom. And also to fix a random non-existing city name crashing the website, I recommend doing some sort of input validation or even using a try catch. I also noticed that there isn't too much data on the weather for your website, it basically only shows the name and just the main temperatures. I recommend using a lot more dot notation your code in order to display more data to the website. For example a min and max temp, or even the humidity. Talking about data, I noticed in your code that you only have one data fetch, which is the basic 5 day weather fetch, and I see that you are grabbing the current city's temp by accessing the index of 0. I recommend actually using the current weather data api endpoint, to get the current city's weather data because it is a lot more accurate. More about your website, I noticed you don't have features like a favorites or geolocation, and these make your website feel more like a static website. In the future, or even if you have time, I recommend trying to implement these features in your website. You can do this by leveraging local storage and using navigator.geolocation. Again looking at your code, I noticed that you grab the days for the 5 day forecast by just accessing a certain index for a certain day, I recommend that you use a some sort of method, like a higher order method to filter certain days into an array. Then you can grab an average or even a high temp from the filtered array, and display it for that certain day. I like how you made use of making lots of interfaces and types for your code, but it looks like you don't utilize most of them, so I recommend trying to implement your interfaces/types more.







This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
