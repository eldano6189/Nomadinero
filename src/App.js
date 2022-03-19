import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { HomePage } from "./Pages/Home-page/HomePage";

function App() {
  return (
    <div className="App">
      <div className="App-border">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
