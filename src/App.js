import { Routes,Route} from 'react-router-dom';

import './App.css';
import { Header } from './Components/Header/header';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
