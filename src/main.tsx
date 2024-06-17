import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./assets/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading="" persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
