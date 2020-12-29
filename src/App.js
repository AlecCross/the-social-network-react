import './App.css'; //Импорт css 
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Music from './components/music/Music';
import News from './components/news/News';
import Settings from './components/settings/Settings';

function App(props) {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            posts={props.posts} />
          }
          />
          <Route path='/dialogs' render={() => <Dialogs
            dialogs={props.dialogs}
            messages={props.messages} />
          }
          />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
