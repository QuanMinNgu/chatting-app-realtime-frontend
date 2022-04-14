import React, { createContext, useEffect, useRef, useState } from 'react'

export const DataContext = createContext();

const Dataprovider = React.memo(({children}) => {
    const [chat,setChat] = useState([]);

    const value = {
        chat:[chat,setChat]
    }
  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
})

export default Dataprovider