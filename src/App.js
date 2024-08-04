import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Firstpage from './Pages/Firstpage';
import Sign from './Pages/Sign';
import Register from './Pages/Register';
import Helpcenter from './Pages/Helpcenter';
import Faq from './Riya/Components/Faq';
import Subscription from './Pages/Subscription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Firstpage/>} />
        <Route path='/SignIn' element={<Sign/>} />
        <Route path='/SignUp' element={<Register/>} />
        <Route path='/FAQ' element={<Faq/>} />
        <Route path='/HelpCenter' element={<Helpcenter/>} />
        <Route path='/Subscription' element={<Subscription/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
