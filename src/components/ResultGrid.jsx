import React, { useEffect } from 'react'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos,getVideos } from '../api/mediaApi'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const {query, activeTab,results, loading, error} = useSelector((store)=>store.search);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!query)return
       try{
        dispatch(setLoading());
         const getData = async ()=> {
             let data = []
        if(activeTab == 'photos'){
            let response =  await getPhotos(query);
            data = response.results.map((item)=>({
                id:item.id,
                type:'photo',
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full,
                url:item.links.html
            }));
        }
        if(activeTab == 'videos'){
            let response = await getVideos(query);
            data = response.videos.map((item)=>({
                id:item.id,
                type:'video',
                title:item.user.name || 'video',
                thumbnail:item.image,
                src:item.video_files[0].link,
                url:item.url
            }));
        }
        dispatch(setResults(data));
        }
        getData();
       }catch(err){
        dispatch(setError(err.message));
       }
       
    },[query,activeTab,dispatch]);

    if(error) return <h1 className='text-center text-2xl m-5'>Error...</h1>
    if(loading) return <h1 className='text-center text-2xl m-5'>Loading......</h1>

  return (
    <div className='flex justify-between w-full flex-wrap overflow-auto gap-5  px-10'>
        {results.map((item,idx)=>{
            return <div  key={idx}>
                    <ResultCard item={item}/>
            </div >
        })}
    </div>
  )
}

export default ResultGrid