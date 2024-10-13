import Main from "./components/Main";
import MobileViewSidebar from "./components/MobileViewSidebar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

export default function App() {

  // Conversation states 
  const [usecase, setusecase] = useState("Usecase 1")
  const [conversation, setConversation] = useState([["bot","Hello! I'm your Bot!"]])

  // Sidebar toggle and isMobile screen toggle
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth>768?false:true)

  useEffect(() => {
    window.onresize = function(e){
      if(window.innerWidth > 768){
        setIsMobile(false)
      }
      else{
        setIsMobile(true)
      }
    }
  
    return () => {}
  }, [])
  

  return (
    <>
      {/* Sidebar for options */}
      <SideBar setConversation={setConversation} setusecase={setusecase} />

      {/* Mobile View Sidebar */}
      {
        isMobile&&
        <MobileViewSidebar setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle}/>
      }
      
      {/* Main div */}
      <div className="bg-gray-100 flex justify-start items-center">
        <Main setSidebarToggle={setSidebarToggle} conversation={conversation} setConversation={setConversation} usecase={usecase}/>
      </div>
    </>
  );
}
