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
            <Route path='/profile' element={<ProfilePage 
              store={props.store}/>} />
            <Route path='/messages/*' element={<MessagesPage 
              store={props.store}
              state={props.state.messagesPage}
              dispatch={props.dispatch}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
