import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos','videos'];

    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab);
  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return <button 
            className={`${(activeTab==elem?'bg-blue-500':'bg-gray-500')}  active:scale-95 transition font-semibold cursor-pointer uppercase px-5 py-3 rounded `}
            onClick={()=>{
                dispatch(setActiveTab(elem));
            }}
            key={idx}
            >
            {elem}
            </button>
        })}
    </div>
  )
}

export default Tabs