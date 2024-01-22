export function MouseClicker(){
    function handleMouseClick(event){
        console.log(event.target.src)
    }
    return(
        <div>

            <button name="Valle ingrado, campo de airsoft" onClick={handleMouseClick}><img src="https://scontent-mad2-1.xx.fbcdn.net/v/t1.18169-9/970677_137677196427150_746973883_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=W-XpGlwHz1QAX9lOMG_&_nc_ht=scontent-mad2-1.xx&oh=00_AfBkmYEcbbRwMidRlAO74HcpPAlgWbVS-61dy1wnV0PJmA&oe=65D5B91E" width={100} height={100}></img></button>
        </div>
    )
}
export default MouseClicker;

//I prevent the name to be displayed by calling only the src attrubute