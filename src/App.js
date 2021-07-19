import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { RouteComponent } from "./components/RouteComponent/RouteComponent";

function App() {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
}
export default App;
