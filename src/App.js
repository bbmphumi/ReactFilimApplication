import './App.css';
import react, { Component } from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'

const App= () => {
    return(
       <div className='navbar'>
           <div className='container'>
           <div className='Fanstatic'><aside><h1>fantastic</h1></aside></div>
           
            <body><div className='Welcome'><h6>Welcome to Fantastic film</h6></div></body>
            

            <ul className='nav-menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Popular film</a></li>
                <li><a href='#'>About the Developer</a></li>
                </ul>

                <button className='btn'>Browse film</button>
            <div className='line'>
             <HiOutlineMenuAlt4/>
                    </div>
               </div>
       </div>

  );
}
export default App;
