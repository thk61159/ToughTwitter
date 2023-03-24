// import React, { useState, useEffect, useContext } from 'react'
// const MyContext = React.createContext()

// // Define a provider component that sets the initial state
// const MyProvider = ({ children }) => {
//   const [passData, setPassData] = useState({test:'測試'})

//   useEffect(() => {
//     // if (token)
//     //   console.log(token)
// 	}, [passData])

// 	return <MyContext.Provider value={passData}>{children}</MyContext.Provider>
// }


// export default MyProvider

import { createContext } from 'react'

const MyContext = createContext()

export default MyContext