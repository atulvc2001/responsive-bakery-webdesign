import React, {createContext, useContext, useReducer} from 'react'

export const ImageContext = createContext();

export const ImageProvider = ({reducer, initialState, children}) => (
    <ImageContext.Provider value = {useReducer(reducer, initialState)}>
      {children}
    </ImageContext.Provider>
);

export const useImage = () => useContext(ImageContext);
