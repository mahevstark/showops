import React from "react";

const EventsIcon = ({ color }: { color: string }) => {

    return (
        <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill={color} fill-opacity="0.01"/>
            <path fill-rule="evenodd" clipRule="evenodd" d="M3.20001 2.6667C3.20001 2.37215 3.4388 2.13336 3.73335 2.13336H12.2667C12.5612 2.13336 12.8 2.37215 12.8 2.6667V14.4C12.8 14.5939 12.6948 14.7725 12.5252 14.8665C12.3556 14.9605 12.1484 14.955 11.984 14.8523L8.00001 12.3623L4.01601 14.8523C3.85161 14.955 3.64437 14.9605 3.47481 14.8665C3.30523 14.7725 3.20001 14.5939 3.20001 14.4V2.6667ZM4.26668 3.20003V13.4378L7.43468 11.4577C7.78057 11.2416 8.21946 11.2416 8.56535 11.4577L11.7333 13.4378V3.20003H4.26668Z" fill={color}/>
        </svg>



    )
}
export default EventsIcon;