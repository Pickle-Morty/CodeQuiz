import './App.scss';
import Test from './components/Test';
import { BrowserRouter, Route } from "react-router-dom"
import Start from './components/Start';
import Result from './components/common/Result';


import { AmongAss, PackMan} from "./assets/img"
import Fail from './components/FailResult';
import Complete from './components/CompleteResult';
const qwestion = {
  id: 10,
  text: "Как расшифровывается HTML?",
  variants : [
    { text: 'First', id: '1' },
    { text: 'Second', id: '2' },
    { text: 'third', id: '3' },
    { text: 'Fiadsasrst', id: '4' },
]
}

const score = {
  fullScore:100, yourScore:15
}

const contant = {
  title: "GAME OVER", subtitle: "Ooops!", massage: "Время вышло",
  imgAray: [AmongAss, PackMan]
} 

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
    subtitle: "Ooops!",
    massage: "Время вышло",
    imgAray: [AmongAss, PackMan],  
    fullScore:100,
    yourScore:15
  },
  completePage: {
    title: "  MISSION COMPLETE", 
    subtitle: "",
    massage: "",
    imgAray: [AmongAss, PackMan],  
    fullScore:100,
    yourScore:100,
  }
}


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/test" exact>
        <Test qwestion={state.qwestion} />
      </Route>
      <Route path="/fail" exact>
        <Fail data ={state.failPage} />
      </Route>
      <Route path="/complete" exact>
        <Complete data = {state.completePage} />
      </Route>
    </BrowserRouter>
   
      
   
  );
}

export default App;
