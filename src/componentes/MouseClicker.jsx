export function MouseClicker(){
    function handleMouseClick(event){
        console.log(event.currentTarget.name)
    }
    return(
        <div>
            <button name="one" onClick={handleMouseClick}>Click me</button>
        </div>
    )
}
export default MouseClicker;