import "./styles.css";

import Profile from "./Profile";
import Interest from "./Interest";
import Learn from "./Learn";
import Expectations from "./Expectations";
import Hobbies from "./Hobbies";
import Box6 from "./Box6";

export default function App() {
  return (
    <div className="App">
      <h1>Ejercicio 1 - React JS</h1>

      <main className="container">
        <div className="flex">
          <Profile />
          <Interest />
          <Learn />
          <Expectations />
          <Hobbies />
          <Box6 />
        </div>
      </main>
    </div>
  );
}
