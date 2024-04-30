
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './component/HomePage';
import RoomPage from './component/RoomPage';


const App=()=> {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/roompage/:roomid' element={<RoomPage/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
