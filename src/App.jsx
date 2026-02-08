import Header from "./components/Header";
import ResourceList from "./components/ResourceList";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <ResourceList />
      <Footer />
    </div>
  );
}
