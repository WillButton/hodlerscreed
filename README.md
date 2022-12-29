<!-- Project Badges -->
![Build-badge]
![Security-badge]

<!-- Info -->
# Hodler's Creed

This is the repo for [Holder's Creed](https://www.hodlerscreed.com). Here you will find the code used to build and deploy 
the site. 

## About The Project
The site is based on Next.js, using the [thirdweb edition-drop template](https://github.com/thirdweb-example/edition-drop). 
It allows users to mint an ERC-1155 NFT on the Polygon network. The project is hosted using Cloudflare Pages.

### Built With

[![Nodejs-badge]][Nodejs-url]
[![Nextjs-badge]][Nextjs-url]
[![Thirdweb-badge]][Thirdweb-url]
[![Polygon-badge]][Polygon-url]


### Polygon Mainnet Contract:
[![Prod-contract-badge]][Prod-contract-url]

### Polygon Testnet Contract:
[![Testnet-contract-badge]][Testnet-contract-url]

## Getting Started

To get a local copy up and running, follow these steps:

- Clone this repo: `git clone git@github.com:WillButton/hodlerscreed.git`
- Install dependencies using the yarn package manager: `yarn`
- Create your own edition drop contract using the thirdweb [dashboard](https://thirdweb.com/dashboard)
- Update [pages/index.tsx](pages/index.tsx#20) with your contract address
- Run the development server locally with `yarn dev`
- Run the test suite with `npm run test`

## Usage
You can use this project to learn how to build professional-grade Web3 apps, or to launch your own site that allows 
users to mint your ERC-1155 NFT.

## Contributing

To contribute to the project:
- Clone the project
- Create a feature branch beginning with your name (i.e. `rekibnikufesin/add-some-feature`)
- Create or update tests to reflect the work done
- Commit your changes: `git commit -m 'Added feature X`
- Push to the branch: `git push origin rekibnikufesin/add-some-feature`
- Open a pull request
- After review and approval, changes are deployed immediately

## Contact
[![Twitter-badge]][Twitter-url]
[![Discord-badge]][Discord-url]

<!-- Markdown Links and Images -->
[Build-badge]: https://github.com/WillButton/hodlerscreed/actions/workflows/ci.yml/badge.svg
[Security-badge]: https://github.com/WillButton/hodlerscreed/actions/workflows/security.yml/badge.svg
[Nodejs-badge]: https://img.shields.io/badge/node.js-16.x-informational?logo=node.js
[Nodejs-url]: https://nodejs.org/en/
[Nextjs-badge]: https://img.shields.io/badge/Nextjs-12.x-informational?logo=next.js
[Nextjs-url]: https://nextjs.org/
[Thirdweb-badge]: https://img.shields.io/badge/Thirdweb-3-informational
[Thirdweb-url]: https://thirdweb.com/
[Polygon-badge]: https://img.shields.io/badge/Polygon-POSv1-informational
[Polygon-url]: https://polygon.technology
[Twitter-badge]: https://img.shields.io/twitter/follow/0xwillbutton?label=Follow
[Twitter-url]: https://twitter.com/0xWillButton
[Discord-badge]: https://img.shields.io/badge/Discord-28-informational?logo=Discord&style=social
[Discord-url]: https://devopsfordevelopers.io/discord
[Prod-contract-badge]: https://badges.thirdweb.com/contract?address=0xE0d804Ad250BcC9f7175e9aB1e1aF6a76E2426F7&theme=dark&chainId=137
[Prod-contract-url]: https://thirdweb.com/polygon/0xE0d804Ad250BcC9f7175e9aB1e1aF6a76E2426F7?utm_source=contract_badge
[Testnet-contract-badge]: https://badges.thirdweb.com/contract?address=0x3C1975e752916a18F277E20a50DbE274623F84ac&theme=dark&chainId=80001
[Testnet-contract-url]: https://thirdweb.com/mumbai/0x3C1975e752916a18F277E20a50DbE274623F84ac?utm_source=contract_badge
