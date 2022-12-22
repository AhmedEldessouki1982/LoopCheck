import React from 'react';
import IOList from '../../utils/signals.json';
import TimeandDates from '../../utils/TimeandDate.js'
let toDay = TimeandDates(1)
let signals = IOList;

export const Context = React.createContext();
let initSignalList = {
    ...signals,
}
let reducer = (signalList, action) => {
    console.log(action.checked)
    switch (action.type) {
        case "SIGNAL_CHECKED":            
            return action.checked ?{IOList:[...signalList.IOList.slice(0,action.checked-1),
                ...signalList.IOList.slice(action.checked, signalList.IOList.length+1),
                {...signalList.IOList[action.checked-1], date: toDay }]}:
                {...signalList}
              
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