import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import ThemedComponent from "./components/ThemedComponent";
import CounterReducer from "./components/CounterReducer";
import CounterCallback from "./components/CounterCallback";
import AppWithExpensiveCalculation from "./components/ExpensiveCalculation";
import TextInput from "./components/TextInput";
import DataFetchingComponent from "./components/DataFetching";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./components/store";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center bg-violet-700 min-h-screen">
        <div className="flex flex-col justify-center items-center text-3xl font-bold mb-4">
            <h1>Rachul Indra Atmawan</h1>
            <h1>A11.2021.13856</h1>
        </div>
        <nav className="text-blue-400 underline text-2xl my-8">
          <ul>
            <li className="hover:text-blue-800">
              <Link to="/counter">Counter (useState)</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link to="/timer">Timer (useEffect)</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/theme">Themed Component (useContext)</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/reducer">Counter (useReducer)</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/callback">Counter (useCallback)</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/expensive">Expensive Calculation (useMemo)</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/input">Text Input (useRef)</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/fetch">Data Fetching (Custom Hook)</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route 
          path="/counter" 
          element={
            <Provider store={store}>
              <Counter />
            </Provider>
          } 
          />
          <Route path="/timer" element={<Timer />} />
          <Route
            path="/theme"
            element={
              <ThemeProvider>
                <ThemedComponent />
              </ThemeProvider>
            }
          />
          <Route path="/reducer" element={<CounterReducer />} />
          <Route path="/callback" element={<CounterCallback />} />
          <Route path="/expensive" element={<AppWithExpensiveCalculation />} />
          <Route path="/input" element={<TextInput />} />
          <Route path="/fetch" element={<DataFetchingComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
