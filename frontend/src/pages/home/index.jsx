import React from 'react';
import GlobalStyle from '../../styles/global';
import  Header from '../../components/Header';
import Footer from '../../components/Footer';
import View from '../../components/View';
import Register from '../../components/register';


function Home(){
  return(
    <div className="Home">
        <GlobalStyle/>
        <Register/>
        <Header/>
        <View/>
        <Footer/>
    </div>
  );
}





export default Home;
