import React, { Component }  from 'react';
import logo from '../logo.svg';
import './Image.css';

class Image extends React.Component{
  state = {
    repeat: 1
  }

  incrementarImagens = () => {
    this.setState((state) => ({
      repeat: state.repeat == 6 ? 6 : state.repeat + 1
    }));
  }

  decrementarImagens = () => {
    this.setState((state) => ({
      repeat: state.repeat == 1 ? 1 : state.repeat - 1
    }));
  }  
 
  render(){
    let rows = []
    const  { repeat } = this.state;

    for(let i=0; (( i < repeat ) && ( i < 6 )); i++){
      rows.push(<img src={logo} className={i/2 == 0 ? "App-logo" : "App-logo-Inverte"} alt="logo" />)
    }
    return (   
      <div>
        <button onClick={this.incrementarImagens} className={"App-logo-button"}>
          Incrementar
        </button>
        <button onClick={this.decrementarImagens} className={"App-logo-button-abaixo"}>
          Decrementar
        </button> 
        {rows}  
      </div>     
    )
  }
 }

 export default Image;