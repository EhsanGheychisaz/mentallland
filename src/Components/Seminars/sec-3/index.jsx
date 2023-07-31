import Slider from "../slider/slider.jsx"
import {Box , Grid , Typography} from "@mui/material"
import axios from "axios"
import {useEffect , useState} from "react"
import {toast} from "react-toastify"
const Sec1 = ()=>{

    const [Seminars , setSeminars] = useState([])


    useEffect(()=>{
      const fetchData = async()=>{
        try{
           axios.get(
              "http://testy.frahosh.com/api/const/getseminars",
              {headers:{"Accept": "*/*"}}
            ).then((res)=>{
              console.log(res)
              if(res.status===200){
                setSeminars(res.data.data)
                console.log("Seminars",Seminars)
  
              }
              if(res.status===404){
                toast.warning(res.message,{theme:"colored"})
  
              }
            })
        }catch(err){
      
            console.log(err)
            toast.error("An error occurred in getting information from the server",{theme:"colored"})
  
        }
      }
      fetchData();
    },[])

    return (
        <Box sx={{mt:5}}>
            <Slider title="General Seminars" data={Seminars}/>
        </Box>
    );
}
export default Sec1;