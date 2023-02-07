import { Routes,Route} from 'react-router-dom';

import './App.css';
import { Footer } from './Components/footer/footer';
import { Header } from './Components/Header/header';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/Home/home';
import { AllRecipes } from './pages/recipe/allrecipes';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/allrecipes' element={<AllRecipes/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     <Footer/>

     
    </div>
  );
}

export default App;
