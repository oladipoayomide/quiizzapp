import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Main';



function App() {
  return (
    <Router>


      <div className="App">
        <Switch>
          <Route>
            <Main />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
