import "./App.css";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import SecaoBiografia from "./components/SecaoBiografia/SecaoBiografia";
import SecaoBlog from "./components/SecaoBlog/SecaoBlog";
import SecaoCard from "./components/SecaoCard/SecaoCard";
import SecaoClientes from "./components/SecaoClientes/SecaoClientes";
import SecaoContato from "./components/SecaoContato/SecaoContato";
import SecaoGarantia from "./components/SecaoGarantia/SecaoGarantia";
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
      <SecaoClientes />
      <SecaoGarantia />
      <SecaoBiografia />
    </div>
  )
}
