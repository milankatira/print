import "./App.css";
import Header from "./components/Header";
import MsDocPrintor from "./components/MsDocPrintor";
import WindowsPrintor from "./components/WindowsPrintor";
import { Provider } from "react-redux";
import  store  from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header
          />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MsDocPrintor />
          <WindowsPrintor />
        </div>
      </Provider>
    </div>
  );
}

export default App;
