import './App.css';
import Events from './components/Events'

function App()  {
 
  return (
    <div className='App'>
      <h1>Testando eventos</h1>
      <Events numero = "1" />
      <Events numero = "2" />
    </div>
  )

}    
export default App










/*import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Form from './components/Form';
import Frase from './components/Frase'
import List from './components/List'


function App()  {
 
  return (
    <div className='App'>
      <Frase />
      <Frase />
      <HelloWorld />
      <SayMyName nome = "Paulo" />
      <Pessoa nome = "Paulo" 
              idade = "37" 
              profissao = "Adm/Eng/Programador"
              foto = "https://via.placeholder.com/150"/>
      <List />
      <Form />
    </div>
  )

}
export default App*/





// Progama da aula 1,2,3,4
/*import HelloWorld from './components/HelloWorld'

function App() {
 
 function Maiuscula(name){
  return name.toUpperCase()
 }

 const url = 'https://via.placeholder.com/150'

 function Sum(a , b){
  return a + b
 }
  return (
    <div className="App">
     <h2> Projeto React Softex</h2>
     <p> Olá, {Maiuscula('paulo')}</p>
     <p> Soma = {Sum(10 , 11)}</p>
     <img scr= {url} alt="Minha Imagem"  />
     <HelloWorld />
    </div>
  );
}

export default App;*/
