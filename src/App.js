import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import FetchApi from './components/FetchApi';
import UserRepos from './Pages/UserRepos';
import RepoUrl from './Pages/RepoUrl';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact>
      <FetchApi />
      </Route>
     
      <Route path='/repo' exact>
        <UserRepos />
      </Route>

      <Route path='/repo/:repourl'>
        <RepoUrl />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
