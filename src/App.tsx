import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { History } from "./pages/history/History";
import { Membership } from "./pages/membership/Membership";
import { NearbySauna } from "./pages/nearbySauna/NearbySauna";
import { Favorite } from "./pages/favorite/Favorite";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const initializeLiff = async () => {
      console.log('LIFF initialization started...');
      try {
        await liff.init({
          liffId: import.meta.env.VITE_LIFF_ID
        });
        console.log('LIFF initialization succeeded');
        setMessage("LIFF init succeeded.");
      } catch (e) {
        console.error('LIFF initialization failed:', e);
        setMessage("LIFF init failed.");
        setError(`${e}`);
      }
    };

    initializeLiff();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/nearbySauna" element={<NearbySauna />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
