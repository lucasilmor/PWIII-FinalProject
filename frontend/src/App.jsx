import React from 'react';
import GlobalStyle from './styles/global';
import  Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';


function App(){
  return(
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <View/>
      <Footer/>
    </div>
  );
}





export default App;
