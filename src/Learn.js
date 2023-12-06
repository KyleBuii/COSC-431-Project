const htmlDoc = document.implementation.createHTMLDocument();
const html = htmlDoc.documentElement;
const head = htmlDoc.createElement('head');
const body = htmlDoc.createElement('body');
html.appendChild(head);
html.appendChild(body);

const metaCharset = htmlDoc.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaViewport = htmlDoc.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

const title = htmlDoc.createElement('title');
title.textContent = 'The Harmonic Vault';
head.appendChild(title);

const linkStylesheet = htmlDoc.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', 'learn.css');
head.appendChild(linkStylesheet);

const scriptJQuery = htmlDoc.createElement('script');
scriptJQuery.setAttribute('src', 'https://code.jquery.com/jquery-3.6.4.min.js');
head.appendChild(scriptJQuery);

const scriptCustom = htmlDoc.createElement('script');
scriptCustom.setAttribute('src', 'script.js');
head.appendChild(scriptCustom);

const styleElement = htmlDoc.createElement('style');
styleElement.textContent = `
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: #291763;
        background-image: linear-gradient(315deg, #291763 0%, #291763 74%);
        user-select: none;
        font-family: 'Poppins', sans-serif;
        color: #fffefe;
    }

    header {
        text-align: center;
        padding: 20px;
        background-color: #291763;
    }

    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    h1, h2 {
        color: #fffefe;
    }

    p {
        line-height: 1.6;
        color: #918c8c;
    }

    p1 {
        text-align: center;
        line-height: 1.6;
        color: #918c8c;
        font-size: larger;
    }

    button {
        border: none;
        background: #f1faff78;
        padding: 12px 30px;
        border-radius: 30px;
        color: white;
        font-weight: bold;
        font-size: 15px;
        transition: .4s;
    }

    button:hover {
        transform: scale(1.3);
        cursor: pointer;
    }
`;

head.appendChild(styleElement);

const header = htmlDoc.createElement('header');
const headerH1 = htmlDoc.createElement('h1');
headerH1.textContent = 'About The Harmonic Vault';
const headerP = htmlDoc.createElement('p');
headerP.textContent = 'Learn about Our Website!';
header.appendChild(headerH1);
header.appendChild(headerP);
body.appendChild(header);

const main = htmlDoc.createElement('main');

const section1 = htmlDoc.createElement('section');
const section1H2 = htmlDoc.createElement('h2');
section1H2.textContent = 'The Goal of our site';
const section1P = htmlDoc.createElement('p');
section1P.textContent = 'Our website is all about bringing music and digital creativity together! We want users to turn their favorite albums into something special by creating unique NFTs. It\'s like giving musicians and fans a cool way to connect through blockchain magic. With our platform, you can make your own limited edition digital treasures inspired by the music you love, giving a whole new twist to the way we experience and own music online.';
section1.appendChild(section1H2);
section1.appendChild(section1P);
main.appendChild(section1);

const section2 = htmlDoc.createElement('section');
const section2H2 = htmlDoc.createElement('h2');
section2H2.textContent = 'What are NFTs? (12th grade edition)';
const section2P = htmlDoc.createElement('p');
section2P.textContent = 'So, think of NFTs as digital certificates of authenticity and ownership, but way from a digital standpoint. They\'re like unique, blockchain-backed IDs for digital or real-world items. In our case, the NFTs on our site will represent special editions of music albums. Each NFT is distinct, and their ownership is securely recorded on a blockchain, which is a decentralized and transparent digital ledger. This kind of technology ensures that the digital assets, like these exclusive music album editions, are truly one-of-a-kind, bought, and sold securely in the Harmonic Vault.';
section2.appendChild(section2H2);
section2.appendChild(section2P);
main.appendChild(section2);

const section3 = htmlDoc.createElement('section');
const section3H2 = htmlDoc.createElement('h2');
section3H2.textContent = 'Use Cases of NFTs';
const section3P = htmlDoc.createElement('p');
section3P.textContent = 'NFTs have various use cases, including digital art, collectibles, virtual real estate, and even in-game items. Artists, musicians, and creators can tokenize their work, allowing them to sell and trade digital assets in a secure and transparent way.';
section3.appendChild(section3H2);
section3.appendChild(section3P);
main.appendChild(section3);

const section4 = htmlDoc.createElement('section');
const section4H2 = htmlDoc.createElement('h2');
section4H2.textContent = 'Where do I start?';
const section4P1 = htmlDoc.createElement('p1');
section4P1.textContent = 'Right here. If you click this button below, you can connect your crypto wallet and begin browsing!\n';
const section4Button = htmlDoc.createElement('button');
section4Button.setAttribute('type', 'button');
section4Button.textContent = 'Sign In';
section4.appendChild(section4H2);
section4.appendChild(section4P1);
section4.appendChild(section4Button);
main.appendChild(section4);

body.appendChild(main);

document.documentElement.replaceWith(html);
