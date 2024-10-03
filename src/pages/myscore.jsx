import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getmyscore } from '../store/profile/profileslice';

const Myscore = () => {
    const dispatch = useDispatch();
     
    useEffect (()=>{ dispatch(getmyscore())},[])
    const {   Myscore  } = useSelector((state) => state.profileslice);

    return (
        <div>
             {JSON.stringify(Myscore)}
        </div>
    );
}


export default Myscore
 