import "./App.css";
import "./assets/css/style.scss";
import Header from "./components/Header/Header";
import Accounts from "./components/Accounts/Accounts";
import data from "./data.json";

function App() {
  return (
    <div className="container">
      <Header />
      {data.map((elem, index) => {
        return <Accounts key={index} data={elem} />;
      })}
    </div>
  );
}

export default App;
