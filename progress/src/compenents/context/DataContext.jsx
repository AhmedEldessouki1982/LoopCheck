import React from 'react';
import { postDailydates } from '../../utils/postDailydates.js';
import TimeandDates from '../../utils/TimeandDate.js';
export const Context = React.createContext();

let toDay = TimeandDates(1);
let signals = {IOList:[]}

let initSignalList = {
    ...signals,
    loading: true,
    dailyStatus: {
        "14/01/2023": 100,
        }
    }

let reducer = (signalList, action) => {
    switch (action.type) {
        case "DATA_LOADING":
            return {...signalList, loading: true}
        case "PROGRESS_LOADING":
            return {...signalList,loading: true,}
        case "PROGRESS_SUCCESS":
            return {...signalList, loading: true, dailyStatus: action.progress }
        case "DATA_SUCCESS":
            return {...signalList, loading:false, IOList: action.data, dailyStatus: {...signalList.dailyStatus}}
        
        case "SIGNAL_CHECKED":            
            return action.checked ?{loading:false, IOList:[...signalList.IOList.slice(0,action.checked-1),
                ...signalList.IOList.slice(action.checked, signalList.IOList.length+1),
                {...signalList.IOList[action.checked-1], 
                    date: !signalList.IOList[action.checked-1].status? toDay : "",
                    status: !signalList.IOList[action.checked-1].status}], dailyStatus: {...signalList.dailyStatus}}:
                {...signalList, ...signalList.dailyStatus}
        case "REFRESH_TREND":
            postDailydates(signalList.dailyStatus)
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

    console.log(signalList);

  return (
    <Context.Provider value={globalState}>{props.children}</Context.Provider>
  )
}