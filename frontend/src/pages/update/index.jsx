import React from 'react';
import GlobalStyle from '../../styles/global';
import  Header from '../../components/Header';
import Footer from '../../components/Footer';
import View from '../../components/View';
import Update from '../../components/Update';

function Edit(){
  return(
    <div className="Edit">
        <GlobalStyle/>
        <Header/>
        <Update/>
        <View/>
        <Footer/>
    </div>
  );
}

export default Edit;
