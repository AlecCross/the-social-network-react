import logo from './logo.svg';
import './App.css'; //Импорт css 
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/music/Music';
import News from './components/news/News';
import Settings from './components/settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile'  component={Profile}/>
          <Route path='/dialogs'  component={Dialogs}/>
          <Route path='/music'    component={Music}/> 
          <Route path='/news'     component={News}/>
          <Route path='/settings' component={Settings}/> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
