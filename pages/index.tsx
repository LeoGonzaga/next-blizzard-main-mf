import Head from "next/head";
import Home from "../src/screens/Home";

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>Blizzard - BR Chanllenges</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
