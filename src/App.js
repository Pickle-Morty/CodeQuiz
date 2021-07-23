import './App.scss';
import Test from './components/Test';
import { BrowserRouter, Route } from "react-router-dom"
import Start from './components/Start';
import Result from './components/Result';



import { AmongAss, PackMan} from "./assets/img"
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


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/test" exact>
        <Test qwestion={qwestion} />
      </Route>
      <Route path="/result" exact>
        <Result score={score} contant = {contant}/>
      </Route>
    </BrowserRouter>
   
      
   
  );
}

export default App;
