import React from 'react';
import GlobalStyle from './styles/global';
import  Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';
import Register from './components/register';
import Update from './components/Update';


function App(){
  return(
    <div className="App">
      <GlobalStyle/>
      <Register/>
      <Update/>
      <Header/>
      <View/>
      <Footer/>
    </div>
  );
}





export default App;
