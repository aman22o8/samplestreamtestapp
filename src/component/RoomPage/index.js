import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { appId,serversecret } from '../helper';


const Roompage = () => {
    const {roomid}=useParams()
    const navigatehome=useNavigate()

   

    //room refrence
    const mylivestream= async(element)=>{
        //generate kit token
        const appID =appId ;
        const serverSecret = serversecret;
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,Date.now().toString(),"AmanDhiman");

        //creating a instance and paiing a token generated above
        const zc=ZegoUIKitPrebuilt.create(kitToken)

        //join room function
        zc.joinRoom({
            container: element,
            scenario: {
             mode: ZegoUIKitPrebuilt.VideoConference,
            },
            onLeaveRoom: () => {
                // Add your custom logic
                navigatehome("/")
                console.log("Room is leaved")
              }
       });

         
    }
  return (
    <div>
        <p>your room is is below</p>
        <h1>{roomid}</h1>
        <div ref={mylivestream}/>
        
    </div>
  )
}

export default Roompage