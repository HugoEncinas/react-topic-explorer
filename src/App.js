import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Explorer from './components/Explorer';
import { client } from './api/apollo'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Explorer />
            </Route>
            <Route path="/topic/:topic">
              <Explorer />
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
