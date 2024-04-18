import "./App.css";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import SecaoRisco from "./components/SecaoRisco/SecaoRisco";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Banner />
      <SecaoRisco />
    </div>
  )
}
