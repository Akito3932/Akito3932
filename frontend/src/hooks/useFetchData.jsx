import React from 'react'
import { useEffect,useState } from 'react'
import { token } from '../config'
// import Appointments from '../Dashboard/doctor-account/Appointments'

const useFetchData = (url) => {

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
        setLoading(true)
        try{ 
            const res=await fetch(url
            ,{
                headers:{Authorization :`Bearer ${token}`}
            })
        const result = await res.json()
        console.log(result, "Appointments")
        if(!res.ok){
            throw new Error(result.message+' 😥')
        }
        setData(result)
        setLoading(false)
        }
        catch(err){
            setLoading(false)
            setError(err.message)
           
        }

        
    }
    fetchData()
},[url])
    console.log(data)
  return {data,loading,error}
}

export default useFetchData