import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
import { Footer } from "./Components/Footer/Footer";
import { Form } from "./Components/Form/Form";
import { Header } from "./Components/Header/Header";
// import { HomePage } from "./Pages/Home-page/HomePage";
import { SuccessPage } from "./Pages/Success-page/SuccessPage";
import { SplashScreen } from "./Components/Splash-screen/SplashScreen";

function App() {
  const { menuActive } = useContext(DataContext);

  return (
    <div className="App">
      {menuActive ? <Form /> : null}
      <div className="App-border">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<SplashScreen />} />
            <Route exact path="/success" element={<SuccessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
