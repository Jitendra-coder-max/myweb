// // // import React ,{ useState } from 'react' 
// // // import './App.css';

// // // function App() {
// // //   const [show , setShow ] = useState(true)
   
// // //  const  obData = () => {
// // //   setShow(!show)
// // //  }
// // //   return (
// // //     <div className="App">
// // //       {/* <h1 style={{color: "red"}}>Jit</h1> */}
// // //  <button onClick={obData}> { show ? "Hide element" : "Show element"}</button>

// // //  {show && <div> div tag</div>}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // import React, { useState } from 'react'


// // // const App = () => {

// // //   const [show, setShow] = useState(true);

// // //   const clickButton = () => {
// // //     setShow(!show)
// // //   }
// // //   return (
// // //     <div>App

// // //       <button onClick={clickButton}> {show ? "Show button" : "Hide button"}</button>
// // //       {show && <div> Button toggle</div>}
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // import React, { useState } from 'react'

// // // const App = () => {

// // //   const [name, setName] = useState('');

// // // const handleChange = (e) => {
// // //   setName(e.target.value)
// // // }

// // //   return (
// // //     <div>App
// // //    {/* <p>{name}</p> */}
// // //       <input type="text" placeholder='Enter name ' name="name" value={name} onChange={handleChange}/>
// // //       <button disabled={name.length<1} >Submit</button>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // import React from 'react'
// // // import Parent from './Parent'

// // // const App = () => {
// // //   return (
// // //     <div>App
// // //       <Parent />
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // Sum of Two Numbers

// // // import React, { useState } from 'react'

// // // const App = () => {

// // //   const [num1,setNum1] = useState();
// // //   const [num2,setNum2] = useState();
// // //   const [total, totalNumber] = useState(0);

// // //   const totalNum = () => {

// // //     const num3 = parseInt(num1) + parseInt(num2);
// // //     // const num3 = parseInt(num1+num2)
// // //     totalNumber(num3)
// // //   }

// // //   // const a = 5;
// // //   // const b = 6;

// // //   // const c = a+b
// // //   return (
// // //     <div>
// // //     <input type="number" placeholder='Enter number' value={num1}  onChange={(e) => setNum1(e.target.value)}/>
// // //     <input type="number" placeholder='Enter number' value={num2} onChange={(e) => setNum2(e.target.value)}/>
// // //     <button onClick={totalNum}> Add number</button>
// // //     Total : {total }
// // //     </div>
// // //   )
// // // }

// // // export default App
// //  // counter app
// // // import React, { useState } from 'react'

// // // const App = () => {

// // //   const [count, countNum] = useState(0);

// // //  const  increment = () => {
// // //  countNum(count+1)
// // //  }

// // // const decrement = () => {
// // //   countNum(count -1)
// // // }

// // //   return (
// // //     <div>App

    
// // //       <button  type="text" value="count"  onClick={increment} disabled={count >= 10}> increment</button>
// // //       <button  type="text" value="count"  onClick={decrement} disabled={count<1}> increment</button>

// // //       {count}
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React,{ useEffect } from 'react'

// // // const App = () => {

// // //   fetch("https://jsonplaceholder.typicode.com/users/1")
// // //   .then((result)=>{
// // //     result.json().then((res) => {
// // //       console.warn("result",res)
// // //     })
// // //   })
// // //   return (
// // //     <div>App

// // //       <h1> Get API call</h1>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // import React,{useState,useEffect} from 'react'

// // // const App = () => {
// // // const [data,setData] = useState([])
// // // useEffect(() => {

// // //   const url = "https://jsonplaceholder.typicode.com/users/1"
// // //   fetch(url).then((result) => {
// // //     result.json().then((res)=>{
// // //       // console.warn("result" + res)
// // //       setData(res)
// // //       console.log("name")
// // //     })
// // //   })
// // // },[])

// // // console.warn(data)
// // //   return (
// // //     <div>App
// // //       <h1> API CALL</h1>
// // //       <p> NAME: {data.name}</p>+
// // //       <p> SURNAME: {data.username}</p>
// // //       <p> Email: {data.email}</p>
// // //       <p> Phone: {data.phone}</p>
     
      
// // //     </div>
// // //   )
// // // }

// // // export default App


// // import React , {useState,useEffect} from 'react'

// // const App = () => {
// //   const [data, setData] = useState([])

// //   useEffect(() => {
// //     const url = "https://jsonplaceholder.typicode.com/users/1"
// //     fetch(url).then((result) =>{
// //       result.json().then((res) => {
// //  console.warn("RESULT" + res)
// //  setData(res)
// //       })
// //     })
// //   },[])
// //   return (
// //     <div>App

// //       <p> NAME :{data.name}</p>
// //       <p> Username :{data.username}</p>
// //       <p> Email :{data.email}</p>
// //      < p> City :{data.address.city}</p>
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'

// import {BrowserRouter, Routes, Route}  from  'react-router-dom';
// import './App1.css';
// import Home from './Home';
// import Contact from './Contact';
// import About from './About';
// import Navbar from './Navbar';
// import News from './News';


// const App = () => {

//   return (
// <BrowserRouter>

//     <div>
// <Navbar />
//       <Routes>
//       App

//       <Route path="/" element={ <Home />}/>
//       <Route path="/news" element={ <News />}/>
//       <Route path="/about" element={ < About />}/>
//       <Route path="/contact" element={ <Contact />}/>
//       </Routes>
//       </div>
// </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import Countdown from './Countdown'
// const App = () => {
//   return (
//     <div>App

//       <Countdown />
//     </div>
//   )
// }

// export default App


import React from 'react'
import Dropdown from './Dropdown'
import './App2.css'
const App = () => {
  return (
    <div>App
      <Dropdown />
    </div>
  )
}

export default App