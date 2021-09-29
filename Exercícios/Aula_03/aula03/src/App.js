
import './App.css';
//Usando o JSX o que precisamos escrever para aparecer uma lista não ordenada usando DOM é o seguinte.
function App() {
  return (
    <div> 
      <ul>
        <li>Pedro</li>
        <li>Liz</li>
        <li>Victor</li>
        <li>Vidotti</li>
      </ul>
    </div>
  );
}

//Usando o JavaScript puro, o mesmo código acima seria escrito da seguinte forma

// function App() {
//   return 
//   /*#__PURE__*/React.createElement("div", null, 
//   /*#__PURE__*/React.createElement("ul", null, 
//   /*#__PURE__*/React.createElement("li", null, "Pedro"), 
//   /*#__PURE__*/React.createElement("li", null, "Liz"), 
//   /*#__PURE__*/React.createElement("li", null, "Victor"), 
//   /*#__PURE__*/React.createElement("li", null, "Vidotti")));
// }

export default App;
