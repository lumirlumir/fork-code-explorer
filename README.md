# ESLint Code Explorer

## Overview

This repository contains the source code for the ESLint [Code Explorer](https://explorer.eslint.org). Code Explorer is designed to help developers explore and understand source code to aid in the creation of custom ESLint rules. Each language supported by Code Explorer exposes the same information that ESLint rules have access to.

At a minimum, each language displays the AST for any code that is entered into the editor. You can toggle different parser settings for each language to see how that affects the AST. For JavaScript, you also get to see scope and code path information.

## Installation

To install and set up the project, follow these steps:

1. Ensure you have Node.js v20 installed. You can download it from the [official Node.js website](https://nodejs.org/).
2. Clone the repository to your local machine.
3. Install the project dependencies using npm - `npm install`.

This will install all the necessary packages and dependencies required to run the project.

Once the installation is complete, you can proceed to the next section to get started with running the development server.

## Usage

Run the development server with `npm run start`.

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Scripts

-   `npm run start`: Starts the development server.
-   `npm run build`: Builds the app for production.

## Configuration

-   The app is configured to use ESLint for linting JavaScript code, with its configuration stored in the `eslint.config.mjs` file.
-   The app is also configured to use Prettier for code formatting, with its configuration stored in the `.prettierrc` file.

## License

Apache 2.0

## Credits

-   [AST Explorer](https://astexplorer.net) - the original AST visualization tool. We took great inspiration from AST explorer when creating this tool.
-   [escope Demo](http://mazurov.github.io/escope-demo/) - the original demo of the [escope](https://github.com/estools/escope) utility that [`eslint-scope`](https://github.com/eslint/js/tree/main/packages/eslint-scope) utility is based on.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->

## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate)
to get your logo on our READMEs and [website](https://eslint.org/sponsors).

<h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a> <a href="https://www.airbnb.com/"><img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="Airbnb" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://trunk.io/"><img src="https://images.opencollective.com/trunkio/fb92d60/avatar.png" alt="trunk.io" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://www.jetbrains.com/"><img src="https://images.opencollective.com/jetbrains/fe76f99/logo.png" alt="JetBrains" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/5c4fa84/logo.png" alt="Liftoff" height="64"></a> <a href="https://americanexpress.io"><img src="https://avatars.githubusercontent.com/u/3853301?v=4" alt="American Express" height="64"></a> <a href="https://www.workleap.com"><img src="https://avatars.githubusercontent.com/u/53535748?u=d1e55d7661d724bf2281c1bfd33cb8f99fe2465f&v=4" alt="Workleap" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://www.wordhint.net/"><img src="https://images.opencollective.com/wordhint/be86813/avatar.png" alt="WordHint" height="32"></a> <a href="https://www.crosswordsolver.org/anagram-solver/"><img src="https://images.opencollective.com/anagram-solver/2666271/logo.png" alt="Anagram Solver" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340?v=4" alt="GitBook" height="32"></a> <a href="https://nx.dev"><img src="https://avatars.githubusercontent.com/u/23692104?v=4" alt="Nx" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774?v=4" alt="HeroCoders" height="32"></a> <a href="https://usenextbase.com"><img src="https://avatars.githubusercontent.com/u/145838380?v=4" alt="Nextbase Starter Kit" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--sponsorsend-->
