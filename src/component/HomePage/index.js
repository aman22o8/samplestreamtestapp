import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uniqueId} from 'uuid'


const Homepage = () => {
    const [roomId, setroomId] = useState("")
    const navigate=useNavigate()
    
    useEffect(() => {
        console.log(uniqueId())
      // setroomId(uniqueId())
    
      return () => {
        setroomId("")
      }
    },[])
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/roompage/${roomId}`)
    }


    const changeRoomID=(event)=>{
        console.log(event.target.value)
        setroomId(event.target.value)
    }
  return (
    <div style={{height:"100vh"}}>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#F7FAFF",borderRadius:"5px",height:"300px"}}>
            <label style={{font:'normal normal 25px Roboto',color:"#000000",margin:"20px 0px"}}>Enter Room ID</label>
            <input onChange={changeRoomID} style={{height:"30px",width:"250px",borderRadius:"5px"}} type="text" name="room" id="roomID" value={roomId} required placeholder='Enter Room ID' />
            <button style={{height:"35px",width:"120px",backgroundColor:"#2085FF",color:"#ffffff",font:"normal normal 18px Roboto",borderRadius:"5px",border:"none",margin:"10px"}} type="submit">Join</button>
        </form>
    </div>
  )
}

export default Homepage
