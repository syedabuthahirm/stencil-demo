import './App.css';

function App() {
  return (
    <div className="App">
      <my-component
        first="Stencil"
        middle="Library"
        last="Don't call me a framework' JS"
        buttonClicked={(e) => {
          console.log(e,'e');
        }}
      ></my-component>
    </div>
  );
}

export default App;
