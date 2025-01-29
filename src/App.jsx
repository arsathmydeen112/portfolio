import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profilePic from './assets/urugi.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <div class="c1">
        <h1>Arsath</h1>
        
      </div>

        <h3>Hi,</h3>
        <p>I am Arsath.I am currently studying ECE II year in SKCET.</p>
        <p>And i love to learn new things,So i chose this department</p>
        <p>And i like to create new innnoviations and that help to innvole me work in projects</p><br>
        </br>
    </div>
    
    <img src={profilePic} alt="" />
        

      

        <section className="bye">
        <h2>PROJECTS</h2>
        <ul type="square">
          <li><a href="https://github.com/arsathmydeen112/Mernstacks.git">LOGIN PAGE</a></li>
        </ul>
        </section>

        <div className="hi">
        <h2>Contacts</h2>
        <li>ph:+919655801852.</li>
        <li>Email:arsathmydeeen@gmail.com.</li>
        <li>Whatshapp:+919655801852.</li>
        <li>Address:D.E.O office street,Melapudur,usilampatti,madurai.</li>
        </div>
        <footer>
        <p>&copy; 2025 Arsath. All rights reserved.</p>
        </footer>
      
    
    
    
    
      
       
    </>
  )
}

export default App
