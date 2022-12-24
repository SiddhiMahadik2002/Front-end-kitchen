import { Routes,Route} from 'react-router-dom';

import './App.css';
import { Header } from './Components/Header/header';
import { Home } from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
