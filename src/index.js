import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./DataContext/DataContextProvider";
// import "@rainbow-me/rainbowkit/styles.css";
// import "@rainbow-me/rainbowkit/styles.css";
// import '@rainbow-me/rainbowkit/styles.css';
// import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   zora,
//   goerli,
// } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';


// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     base,
//     zora,
//     ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
//   ],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'RainbowKit demo',
//   projectId: 'YOUR_PROJECT_ID',
//   chains,
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
      <DataContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContextProvider>
  
);
