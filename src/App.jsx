import "./App.css";
import AppFooter from "./componenets/AppFooter/AppFooter";
import AppHeader from "./componenets/AppHeader/AppHeader";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // create a page layout here  header footer main
  return (
    <>
      <AppHeader />
      <main>
        {" "}
        <Home />
      </main>

      <AppFooter />
    </>
  );
}

export default App;
