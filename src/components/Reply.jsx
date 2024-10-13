import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Reply({text}){
    
    const [loadText, setloadText] = useState("")
    
    async function stepType() {
        let s = "";
        for (let i = 0; i < text.length; i++) {
            s += text[i];
            setloadText(s);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
    useEffect(() => {        
        stepType();
    }, [])
    
    
    return(

        // Reply Chatbox
        <div className="flex flex-col gap-1 items-start">
            <div className="w-[2rem]"><FaRobot size={30} color="#03556A"/></div>
            <div className="rounded-md rounded-tl-none min-w-[30%] max-w-[100%] p-3 bg-white shadow-md break-words hover:scale-[1.01] duration-300 ease-in-out">{loadText}</div>
        </div>
    )

}
