import React from 'react';
import IOList from '../../utils/signals.json';
let signals = IOList;

export const Context = React.createContext();
let initSignalList = {
    ...signals,
}
let reducer = (signalList, action) => {
    switch (action.type) {
        case "SIGNAL_CHECKED":
            return {...signalList,  }
    
        default:
            throw new Error();
    }
}

export default function DataContext(props) {
    let [signalList, dispatch] = React.useReducer(reducer, initSignalList);
    let globalState = {
        signalList,
        dispatch
    };
  return (
    <Context.Provider value={globalState}>{props.children}</Context.Provider>
  )
}