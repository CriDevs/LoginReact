import  { useContext } from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import { AuthContext } from './contexts/Auth/AuthContext';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import {Home} from './pages/Home';
import {Private} from './pages/Private'
import './style/App.css'
import { useNavigate } from 'react-router-dom';


function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignout = async () =>{
    await auth.signout()
    navigate('/')
  }

  return (
    <div className="App">
     <header>
       <h1>Header do site</h1>

       <nav>
         <Link to='/'>Home</Link>
         <Link to='/private'>Pagina private</Link>
         {auth.user && <a href='javascript:;' onClick={handleSignout}>Sair</a>}
       </nav>

     </header>
     <hr/>

     <Routes>
       <Route path='/' element={<Home/>}/>

       <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}/>
     </Routes>
    </div>
  );
}

export default App;
