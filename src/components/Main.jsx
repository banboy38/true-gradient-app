import Bot from "./Bot";
import { useState } from "react";

export default function Main({usecase, conversation, setConversation, setSidebarToggle}){

    return(

        // Toggle for Chatbot and Register Screen
        <div className=" md:ml-[18rem] w-full md:w-[85vw] h-[92vh] flex justify-center items-center overflow-hidden">
            <Bot setSidebarToggle={setSidebarToggle} conversation={conversation} setConversation={setConversation} usecase={usecase}/>                
        </div>
    )
}