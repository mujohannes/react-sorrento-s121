import logo from './logo.svg';
import './App.css';
import {Text} from './components/Text'
import {Button} from './components/Button'
import {List} from './components/List'

const items = [
  {"name" : "banana" , "colour" : "yellow"},
  {"name" : "apple" , "colour" : "green"},
  {"name" : "tomato" , "colour" : "red"}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <Text name="Barry" color="red" />
        <Text name="Larry" color="yellow" />
        <Text name="Jane" color="orange" />
        <Button start={3} />
        <Button start={100} />
        <List items={items} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
