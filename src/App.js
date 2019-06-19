import React from 'react';
import './App.css';
import RecipesContainer from './components/RecipesContainer'

class App extends Component {
  render() {
    return(
      <div className='App'>
        <div className='App-header'>
          <h1>Recipe Board</h1>
        </div>
        <RecipesContainer />
      </div>
    )
  }
}


export default App;
