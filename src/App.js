import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { SplashScreen } from "./Components/Splash-screen/SplashScreen";
import { HomePage } from "./Pages/Home-page/HomePage";

function App() {
  return (
    <div className="App">
      <SplashScreen />
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
