const convertTime=time=>{
    const timeParts=time.split(':')
    let hrs=parseInt(timeParts[0])
    const min=parseInt(timeParts[1])

    let meridiem='am'

    if(hrs>=12){
        meridiem='pm'
        if (hrs>12){
            hrs-=12
        }
    }
    return hrs.toString().padStart(2) +":"+ min.toString().padStart(2,'0')+" "+ meridiem
}

export default convertTime