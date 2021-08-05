import './App.scss';
import Test from './components/Test/Test';
import { BrowserRouter, Route } from "react-router-dom"
import Start from './components/Start';
import { Logo, AmongAss, PackMan, PackManSmall,Gears, CompleteImg1, CompleteImg2, CompleteImg3, CompleteImg4, CompleteImg5} from "./assets/img"
import Fail from './components/FailResult';
import Complete from './components/CompleteResult';
import TestContainer from './components/Test/TestContainer';
import {Provider} from "react-redux"

let state = {
   qwestion : {
    id: 10,
    text: "Как расшифровывается HTML?",
    variants : [
      { text: 'First', id: '1' },
      { text: 'Second', id: '2' },
      { text: 'third', id: '3' },
      { text: 'Fiadsasrst', id: '4' },
  ]
  },
  failPage: {
    title: "GAME OVER", 
    subtitle: "Oops!",
    massage: "Время вышло",
    imgAray: [AmongAss, PackMan, Logo, PackManSmall, Gears],  
    fullScore:100,
    yourScore:15
  },
  completePage: {
    title: "  MISSION COMPLETE", 
    subtitle: "",
    massage: "",
    imgAray: [CompleteImg1, CompleteImg2, CompleteImg3, CompleteImg4, CompleteImg5],  
    fullScore:100,
    yourScore:100,
  }
}


function App({store}) {
  return (
   <Provider store = {store}>
      <BrowserRouter>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/test" exact>
        <TestContainer />
      </Route>
      <Route path="/fail" exact>
        <Fail data ={state.failPage} />
      </Route>
      <Route path="/complete" exact>
        <Complete data = {state.completePage} />
      </Route>
    </BrowserRouter>
   </Provider>
   
      
   
  );
}

export default App;
