import { useState, createContext } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Switch from "./components/Switch";

export const PriceContext = createContext();

function App() {
  const [pricing, setPricing] = useState("Monthly");

  return (
    <PriceContext.Provider
      value={{
        pricing,
        setPricing,
      }}
    >
      <div className="App">
        <header className="App-header">
          <h1>Our Pricing</h1>
          <Switch
            pricing={pricing}
            setPricing={setPricing}
          />
        </header>
        <main>
          <Cards pricing={pricing} />
        </main>
      </div>
    </PriceContext.Provider>
  );
}

export default App;
