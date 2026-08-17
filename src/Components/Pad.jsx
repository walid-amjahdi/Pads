export function Pad({pad , togglePad})
{
    return (
        <button style={{backgroundColor : pad.color}} className={pad.on ? "on" : ""} onClick={()=>{togglePad(pad.id)}}></button>
    )
}