
import './App.css';
import List from './Components/List';
import Search from './Components/Search';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <div className="layout">
         
         <div className="header-container">
            <h1>Movie Searcher</h1>
        </div>

        

        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <section id="content" className="content">

           
           <List />

        </section>

        <aside className="lateral">
            <Search />
            <Add />
        </aside>
       </div>
    </div>
  );
}

export default App;
