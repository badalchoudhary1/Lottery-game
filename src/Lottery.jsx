import { useState } from "react"
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning = sum(ticket) === winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}>Buy a ticket</button>
            <h3>{isWinning && "congratulation you won the game!!"}</h3>
        </div>
    );
}