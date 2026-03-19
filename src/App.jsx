import "./App.css";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="app">
      <h1 className="main-title">Static Product List</h1>
      <p className="intro-text">
        This page shows a list of products using React.
      </p>
      <ProductList />
    </div>
  );
}

export default App;