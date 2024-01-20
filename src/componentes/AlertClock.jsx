import HandleAlertClock from "./hooks/HandleAlertClock";

export function AlertClock(){
    return(
        <button onClick={HandleAlertClock}> Click me </button>
    );
}
export default AlertClock;