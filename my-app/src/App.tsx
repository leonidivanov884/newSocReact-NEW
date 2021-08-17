import React from 'react';
import './App.css';
import Header from "./components/header/header";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Main from './pages/main/main';
import RightMenu from "./components/RightMenu/rightMenu";

function App() {
    return (
      <div className='App'>
        <Header />
        <LeftMenu />
        <Main />
        <RightMenu />
      </div>
    );
}

export default App;
