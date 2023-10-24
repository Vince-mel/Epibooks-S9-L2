import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/welcome";
import Footer from "./components/Footer";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />
      <div>
        <Welcome />
      </div>
      <div>
        <AllTheBooks />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
