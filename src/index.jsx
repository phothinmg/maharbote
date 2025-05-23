import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import Home from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import Footer from "./components/Footer.jsx";
export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
