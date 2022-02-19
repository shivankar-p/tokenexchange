import React from 'react';
import { DAppProvider, ChainId} from "@usedapp/core"
import { Header } from "./Components/Header"

function App() {
  return (
    <div className="App">
      <DAppProvider config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
      }}>
        <Header />
        <div>HI</div>
      </DAppProvider>
    </div>
  );
}

export default App;
