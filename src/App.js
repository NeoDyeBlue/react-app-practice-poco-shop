import Navigation from "./components/Navigation";
import ProductsTab from "./components/ProductsTab";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <div className="l-app">
      <Navigation />
      <ProductsTab />
      <Footer />
    </div>
  );
}

export default App;
