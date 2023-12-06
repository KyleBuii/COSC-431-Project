import React, { Component } from 'react';

class LearnPage extends Component {
  signInButtonClick = () => {
    // Add your logic for the button click here
    console.log('Sign In button clicked!');
  };

  render() {
    return (
      <div>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>The Harmonic Vault</title>
          <link rel="stylesheet" href="learn.css" />
          <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
          <script src="script.js"></script>
          <style>
            {`
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

              button {
                border: none;
                background: #f1faff78;
                padding: 12px 30px;
                border-radius: 30px;
                color: white;
                font-weight: bold;
                font-size: 15px;
                transition: .4s;
                margin-right: 10px; /* Added margin for better spacing */
              }

              button:hover {
                transform: scale(1.3);
                cursor: pointer;
              }
            `}
          </style>
        </head>

        <body>
          <header>
            <h1>About The Harmonic Vault</h1>
            <p>Learn about Our Website!</p>
          </header>

          <main>
            <section>
              <h2>The Goal of our site</h2>
              <p>Our website is all about bringing music and digital creativity together! We want users to turn their favorite albums into something special by creating unique NFTs. It's like giving musicians and fans a cool way to connect through blockchain magic. With our platform, you can make your own limited edition digital treasures inspired by the music you love, giving a whole new twist to the way we experience and own music online.</p>
            </section>

            <section>
              <h2>What are NFTs? (12th grade edition)</h2>
              <p>So, think of NFTs as digital certificates of authenticity and ownership, but way from a digital standpoint. They're like unique, blockchain-backed IDs for digital or real-world items. In our case, the NFTs on our site will represent special editions of music albums. Each NFT is distinct, and their ownership is securely recorded on a blockchain, which is a decentralized and transparent digital ledger. This kind of technology ensures that the digital assets, like these exclusive music album editions, are truly one-of-a-kind, bought, and sold securely in the Harmonic Vault.</p>
            </section>

            <section>
              <h2>Use Cases of NFTs</h2>
              <p>NFTs have various use cases, including digital art, collectibles, virtual real estate, and even in-game items. Artists, musicians, and creators can tokenize their work, allowing them to sell and trade digital assets in a secure and transparent way.</p>
            </section>

            <section>
              <h2>Where can I learn more?</h2>
              <p>Below are additonal resources to learn more about NFTS!</p>
              <br />
              <a href="https://www.forbes.com/advisor/investing/cryptocurrency/nft-non-fungible-token/" target="_blank" rel="noopener noreferrer">
                Forbes-NFTs <br /> 
              </a>
              <a href="https://www.coindesk.com/learn/what-are-nfts-and-how-do-they-work/" target="_blank" rel="noopener noreferrer">
                Coindesk NFTs <br /> 
              </a>
              <a href="https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain" target="_blank" rel="noopener noreferrer">
                Decrypt NFTs <br /> 
              </a>
            </section>
          </main>
        </body>
      </div>
    );
  }
}

export default LearnPage;

