import "./App.css";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import { Footer } from "./Components/Footer/Footer";
import { Form } from "./Components/Form/Form";
import { Header } from "./Components/Header/Header";
import { SplashScreen } from "./Components/Splash-screen/SplashScreen";
import { HomePage } from "./Pages/Home-page/HomePage";

function App() {
  const { menuActive } = useContext(DataContext);

  return (
    <div className="App">
      <SplashScreen />
      {menuActive ? <Form /> : null}
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
