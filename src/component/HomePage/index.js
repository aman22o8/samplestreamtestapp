import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
    const [roomId, setroomId] = useState("")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/roompage/${roomId}`)
    }

    const changeRoomID=(event)=>{
        setroomId(event.target.value)
    }
  return (
    <div style={{height:"100vh"}}>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#F7FAFF",borderRadius:"5px",height:"300px"}}>
            <label style={{font:'normal normal 25px Roboto',color:"#000000",margin:"20px 0px"}}>Enter Room ID</label>
            <input onChange={changeRoomID} style={{height:"30px",width:"250px",borderRadius:"5px"}} type="text" name="room" id="roomID" required placeholder='Enter Room ID' />
            <button style={{height:"35px",width:"120px",backgroundColor:"#2085FF",color:"#ffffff",font:"normal normal 18px Roboto",borderRadius:"5px",border:"none",margin:"10px"}} type="submit">Join</button>
        </form>
    </div>
  )
}

export default Homepage