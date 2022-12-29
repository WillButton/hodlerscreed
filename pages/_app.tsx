import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId =
    (process.env.NEXT_CHAINID ? parseInt(`ChainId.${process.env.NEXT_CHAINID}`) : ChainId.Mumbai);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>The Hodler&apos;s Creed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="2022 was a tough year on crypto. Commemorate your learning with the Hodler's Creed NFT"
        />
        <meta
          name="keywords"
          content="NFT crypto hodl 2022"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
