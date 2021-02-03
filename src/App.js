import './App.css'; //Импорт css 
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import Music from './components/music/Music';
import News from './components/news/News';
import Settings from './components/settings/Settings';
import UsersContainer from './components/friends/UsersContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar users={props.state.usersPage.users} /> 
      <div className='app-wrapper-content'>

        <Route path='/profile' render={() => <ProfileContainer /> }/>

        <Route path='/dialogs' render={() => <DialogsContainer/> }/>

        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends' render={() => <UsersContainer/> } />
      </div>
    </div>
  );
}

export default App;
