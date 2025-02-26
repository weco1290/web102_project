import "./App.css";
import Card from "./components/Card";
import data from "./data.js";
const App = () => {
  const cards = data.map((element) => {
    return <Card key={element.id} {...element} />;
  });
  return (
    <div className="App">
      <h1>Food Truck Favorites</h1>
      <img src="/awning.png"></img>
      <div className="container">{cards}</div>
    </div>
  );
};

export default App;
