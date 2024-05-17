import './App.css';

function App() {
  const elemento1 = <h1>Hello JSX!</h1>;
  const elemento2 = (
    <div>
      <h1>Mi Título</h1>
      <p>Este es un párrafo.</p>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    </div>
  );
  return <div>{elemento1}{elemento2}</div>

}

export default App;


