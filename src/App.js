import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import MessagesPage from './components/MessagesPage/messagesPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/profilepage';



function App(props) {
  return (
    <BrowserRouter>
      <div className = 'container'>
        <div className = 'wrap'>
          <Navbar />
          <Routes>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/messages/*' element={<MessagesPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
