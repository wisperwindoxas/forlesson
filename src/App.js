import './App.css';
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'




function App() {
  const hi = "Salom mening dustlarim"
  return (
    <div className="App">
        <Header hello={hi}/>
        <Movies title="1 page" page={1}/>
        <Movies title="2 page" page={2}/>
        <Movies title="3 page" page={3}/>
        <Movies title="4 page" page={4}/>
        <Movies title="5 page" page={5}/>
        <Movies title="6 page" page={6}/>
    </div>
  );
}

export default App;
