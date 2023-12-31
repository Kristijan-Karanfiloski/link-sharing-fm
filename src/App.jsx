import "./App.scss";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
