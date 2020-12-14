import logo from './logo.svg';
import './App.css'; //Импорт css 
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Profile /> */}
          <Dialogs />
      </div>
    </div>
  );
}

export default App;
