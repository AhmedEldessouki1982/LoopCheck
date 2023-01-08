import React from 'react';
// import IOList from '../../utils/signals.json';
import TimeandDates from '../../utils/TimeandDate.js';
export const Context = React.createContext();

let toDay = TimeandDates(1);
let signals = {IOList:[]}

let initSignalList = {
    ...signals,
    loading: true,
    dailyStatus: {
        "26/12/2022": 100,
        "25/12/2022": 35,
        "24/12/2022": 108,
        "23/12/2022": 60,
        }
    }

let reducer = (signalList, action) => {
    switch (action.type) {
        case "DATA_LOADING":
            return {...signalList, loading: true}
        case "DATA_SUCCESS":
            return {...signalList, loading:false, IOList: action.data, dailyStatus: {}}
        case "SIGNAL_CHECKED":            
            return action.checked ?{IOList:[...signalList.IOList.slice(0,action.checked-1),
                ...signalList.IOList.slice(action.checked, signalList.IOList.length+1),
                {...signalList.IOList[action.checked-1], 
                    date: !signalList.IOList[action.checked-1].status? toDay : "",
                    status: !signalList.IOList[action.checked-1].status}], dailyStatus: {...signalList.dailyStatus}}:
                {...signalList, ...signalList.dailyStatus}
        case "REFRESH_TREND":
            return {...signalList,dailyStatus:{...signalList.dailyStatus, [toDay]:action.IDselectedToday.length}}        
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