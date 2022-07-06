import "./App.css";

import HeaderContainer from "./Header/HeaderContainer";

import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <div className="header">
        <HeaderContainer />
      </div>
      <MainPage />
    </div>
  );
}

export default App;
