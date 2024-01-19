// import { RiFacebookCircleLine, RiInstagramLine, RiMapPinFill, RiYoutubeLine } from '@remixicon/react';
import React from 'react'
import { IconContext } from "react-icons";

const IconStyleProvider = ({children}) => {
  return (
    <IconContext.Provider value={{color: 'blue', size: '50px'}}>
        {children}
        {/* <div>
            <RiMapPinFill />
            <RiFacebookCircleLine /> 
            <RiInstagramLine /> 
            <RiYoutubeLine /> 
        </div> */}
    </IconContext.Provider>
  )
}

export default IconStyleProvider;
