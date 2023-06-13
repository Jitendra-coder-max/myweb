// import React from 'react'


// const Child = (props) => {


//   return (
//     <div>Child

//        <span> {props.data}</span>
//     </div>
//   )
// }

// export default Child

// import React, { useState } from 'react'
//  //PASS DATA FROM CHILD TO PARENT
// const Child = (props) => {

//     const [name, setName] = useState('')

//     const handleChange = (e) => {
//         setName(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         props.onSubmit(name)

//     }

//   return (
//     <div>Child

//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter your name'  value={name} onChange={handleChange}/>
//             <input type="submit" />
//         </form>
//     </div>
//   )
// }

// export default Child