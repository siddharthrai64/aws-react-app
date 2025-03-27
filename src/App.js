import logo from './logo.svg';
import './App.css';
import SimpleInput from './components/SimpleInput';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="app">
      <SimpleInput />
      <BasicForm />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           This is React Component Place
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
