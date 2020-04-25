import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import * as serviceWorker from './serviceWorker';

/* class  WhoAmI extends Component {
   constructor(props){
      super(props);
      this.state = {
         years: 26
      }
      this.nextYear = this.nextYear.bind(this);
   }
   nextYear() {
      console.log(1);
      this.setState(
         state =>({
            years: ++state.years
         }) 
      )
   }
   render(){
      const {name, surname, link} = this.props;
      const {years} = this.state;
      return(
         <>
            <button onClick={this.nextYear}>++</button>
            <h1>My name is {name}, surname - {surname}, years = {years}</h1>
            <a href={link}>My profile</a>
         </>
      )
   }
}



const All = () => {
   return(
      <>
          <WhoAmI name=" John"surname="Smith" link="facebook.com"/>
          <WhoAmI name=" John"surname="Sema" link="facebook.ru"/>
          <WhoAmI name=" John"surname="Smith" link="facebook.com"/>
          <WhoAmI name=" Jila"surname="Smith" link="facebook.com"/>
      </>
   )
}


 */










ReactDOM.render(
  <App/> , document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
