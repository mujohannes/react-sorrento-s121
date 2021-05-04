import Logo from './igloo-solid.png'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartment} from './components/Apartment'
import {Pricing} from './components/Pricing'
import {Book} from './components/Book'
import {Local} from './components/Local'
import {Contact} from './components/Contact'

import {Header} from './components/Header'

const NavItems = [
  {"name" : "Home" , "link" : "/home"},
  {"name" : "The Apartment" , "link" : "/apartment"},
  {"name" : "Pricing" , "link" : "/pricing"},
  {"name" : "Book" , "link" : "/book"},
  {"name" : "Local Area" , "link" : "/local"},
  {"name" : "Contact" , "link" : "/contact"}
]
function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems} />
      <main className="content">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/apartment">
            <Apartment />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/local">
            <Local />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
