import * as React from "react";
import { Header, InputForm, ResultsForm } from "./components";
import createStore from "./ducks/store";
import { Provider } from "react-redux";
import "./App.css";

const store = createStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <InputForm />
        <ResultsForm />
      </Provider>
    </div>
  );
};

export default App;
