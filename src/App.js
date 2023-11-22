import React from 'react';

import { //BrowserRouter ,
Route,Routes,
  //Link 
} from 'react-router-dom';

import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotels from './pages/hotels/Hotels'; 
 import Login from './components/login/Login';
 import Signup from './components/signup/Signup';
function App(){
    return (
 <>
            <Routes> 
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/signup' element={<Signup/>}/> */}
                <Route path='/hotels' element={<List/>}/>
                <Route path='/hotels/:id' element={<Hotels/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
                
            </Routes>
 </>
     
    )
}
export default App;


// import React from 'react';

// import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

// import Home from './pages/home/Home';
// import List from './pages/list/List';
// import Hotels from './pages/hotels/Hotels'; 
// function App(){
//     return (
//         <Router>
//             <Routes>
//                 <Route path='/' element={<Home/>}/>
//                 <Route path='/hotels' element={<List/>}/>
//                 <Route path='/hotels/:id' element={<Hotels/>}/>
//             </Routes>
//         </Router>
//     )
// }
// export default App;


// import React from 'react'
// import './App.css';
// import Signup from './components/login/login';
// function App() {
    // return (
        //       <div className="App">
        //           {Signup()}
        //       </div>
        //     )
        //   }
        // export default App;