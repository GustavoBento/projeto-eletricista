import "./App.css";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import SecaoBlog from "./components/SecaoBlog/SecaoBlog";
import SecaoCard from "./components/SecaoCard/SecaoCard";
import SecaoContato from "./components/SecaoContato/SecaoContato";
import SecaoMaps from "./components/SecaoMaps/SecaoMaps";
import SecaoResponsabilidade from "./components/SecaoResponsabilidade/SecaoResponsabilidade";
import SecaoRisco from "./components/SecaoRisco/SecaoRisco";
import SecaoServico from "./components/SecaoServico/SecaoServico";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Banner />
      <SecaoRisco />
      <SecaoResponsabilidade />
      <SecaoCard />
      <SecaoServico />
      <SecaoMaps />
      <SecaoContato />
      <SecaoBlog />
    </div>
  )
}
