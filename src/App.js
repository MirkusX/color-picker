import logo from "./logo.svg";
import "./App.css";
import { Frontpage } from "./pages/Frontpage";
import { useEffect, useState } from "react";
import axios from "axios";
import { ColorContext, DataContext, ModeContext } from "./components/Context";

function App() {
  const [color, setColor] = useState("000000");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [mode, setMode] = useState("monochrome");
  const getData = () => {
    axios
      .get(
        `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  useEffect(() => {
    getData();
  }, [color, mode]);
  if (data)
    return (
      <DataContext.Provider value={{ data, setData }}>
        <ModeContext.Provider value={{ mode, setMode }}>
          <ColorContext.Provider value={{ color, setColor }}>
            <div className="App">
              <Frontpage />
            </div>
          </ColorContext.Provider>
        </ModeContext.Provider>
      </DataContext.Provider>
    );
}

export default App;
