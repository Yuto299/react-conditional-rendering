import Form from "./Form";
import "./App.css";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

// import "./App.css";
// import Login from "./Login";

// // let isLoggedIn = false;

// const currentTime = new Date(2025, 8, 30, 18).getHours();

// console.log(currentTime);

// function App() {
//   return (
//     <>
//       <div className="container">
//         {
//           currentTime > 12 && <h1>Why are you still working?</h1>
//           // trueコメントが出る、falseならスルー
//           // isLoggedIn ? <h1>Hello</h1> : <Login />
//         }
//       </div>
//     </>
//   );
// }

// export default App;
