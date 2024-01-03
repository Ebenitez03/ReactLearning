export function Age({age=37}){
    const adult= age>=18;

    return(
        <div>
        { adult?<p>Your age is {age}</p>:<p>You are very young!</p>}
        </div>
    )
}

export default Age;