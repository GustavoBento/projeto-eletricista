import "./App.css";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import SecaoCard from "./components/SecaoCard/SecaoCard";
import SecaoResponsabilidade from "./components/SecaoResponsabilidade/SecaoResponsabilidade";
import SecaoRisco from "./components/SecaoRisco/SecaoRisco";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Banner />
      <SecaoRisco />
      <SecaoResponsabilidade />
      <SecaoCard />
    </div>
  )
}
