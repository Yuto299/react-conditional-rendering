import "./App.css";
import Login from "./Login";

// let isLoggedIn = false;

const currentTime = new Date(2025, 8, 30, 18).getHours();

console.log(currentTime);

function App() {
  return (
    <>
      <div className="container">
        {
          currentTime > 12 && <h1>Why are you still working?</h1>
          // isLoggedIn ? <h1>Hello</h1> : <Login />
        }
      </div>
    </>
  );
}

export default App;
