import "./App.css";
import Header from "./components/Home/Header";
import MsDocPrintor from "./components/Home/MsDocPrintor";
import WindowsPrintor from "./components/Home/WindowsPrintor";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Print from "./pages/Print";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MsDocPrintor />
            <WindowsPrintor />
          </div>
        </>
      ),
    },

    {
      path: "/1",
      element: <Print />,
    },
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
