"use client";
import React, { useContext, useEffect } from 'react';
import { GlobalAppStoreContext } from '../contexts/GlobalAppStore/GlobalAppStoreContext';

const MyComponent = () => {
    const { dispatch, myStore, globalVariable } = useContext(GlobalAppStoreContext);
    useEffect(() => {
        dispatch({ type: 'MY_GLOBAL_VARIABLE', payload: 'cheese' });
        dispatch({ type: 'MY_STORE', payload: { bestCheese: 'cheddar' } });
    },[])

    return ( <div>My test component {globalVariable} {myStore.bestCheese}</div> );
}
 
export default MyComponent;