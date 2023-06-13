// import React, {useEffect, useState} from 'react'

// const Countdown = () => {

//     const[count, setCount] = useState(0)
//     const [inputNumber, setInputnumber] = useState('')

// const handleChange = (e) => {
//     setInputnumber(e.target.value)
// }

// const buttonClick = () => {
    
//     const inputNumber2 = parseInt(inputNumber)

//     setCount(inputNumber2)
// }


// useEffect(() =>{
    
// })



// useEffect(() => {
//      const timer = setInterval(() => {
//         setCount((c) => {
//              return c-1;
//         });
//      }, 5000);

//      return () => {
//         clearInterval(timer)
//      }

//         // const id = setInterval(() => setCount((c) => c - 1), 1000);
//     //    return () => clearInterval(id);
//      }, [count]);







// useEffect(() => {
//     const timer = setInterval(() => {
//         setCount((prevCount) =>  {
//            if(prevCount === 0){
//             clearInterval(timer)

//             return 0
//            }

//             return prevCount - 1;
//         })
        
//     }, 1000);

//     return  () => {
//         clearInterval(timer)
//     }


// }, [count])


// useEffect(() =>{
  
//     const timer = setInterval(() => {
//         setCount((c) => {
//             if(c=== 0){
//                 clearInterval(timer)
//                 return 0
//             }
//             return c - 1 ;
//         })
        
//     }, 5000);

//     return () => {
//         clearInterval(timer)
//     }
// } ,[count])








//   return (
//     <div>

     
// <input type='text' placeholder='Enter number here' name="inputNumber" value={inputNumber} onChange={handleChange}/>
// <button onClick={buttonClick}>Button</button>
// <br/>
//   <h1>{count}</h1>
//     </div>
//   )
// }

// export default Countdown

// import React, { useEffect, useState } from 'react'


// const Countdown = () => { 

//     const [count, setCount] =  useState(0) ;
//     const [ inputNumber, setInputNumber]   = useState('')     
    
//   const handleChange = (e) => {
//         setInputNumber(e.target.value);
//     }

//     const countDown = () => {

//         const parseInputNumber = parseInt(inputNumber)
//         setCount(parseInputNumber)
//         console.log("called")
//     }
// useEffect(() => {
//     const timer = setInterval(() => {
//         setCount((c) => {
//           if( c===0){
//             clearInterval(timer)
//             return 0
//           }
//           return c-1
//         }
        
//         )
        
//     }, 1000);

//     return () => {clearInterval(timer)}

// },[count])

    

//   return (
//     <div>
//         <input type="text" placeholder='Enter number' name="inpuNumber" value={inputNumber} onChange={handleChange} />
//         <button onClick={countDown} >Button</button>

//         <h1>{count}</h1>
//     </div>
//   )
// }

// export default Countdown