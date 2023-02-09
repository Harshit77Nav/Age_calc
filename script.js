let btn = document.getElementById("btn");
btn.addEventListener("click", submit);

function submit(){
    let date = document.getElementById("Date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let checkdate = date.split("");
    let arr = ["0","1","2","3","4","5","6","7","8","9"];
    let str = "";
    if(checkdate.length==0){
    str += "Date not valid  "
    } else {
    for(let i=0; i<checkdate.length; i++){
        if(arr.includes(checkdate[i])){
            continue;
        } else {
            str += "Date not valid  ";
            break;
        }
    }
}

    let checkmonth = month.split("");
    if(checkmonth.length==0){
        str += "Month not valid  "
    } else {
    for(let i=0; i<checkmonth.length; i++){
        if(arr.includes(checkmonth[i])){
            continue;
        } else {
            str += "Month not valid  ";
            break;
        }
    }
}

    let checkyear = year.split("");
    if(checkyear.length !== 4){
        str += "Year not valid"
    } else{
    for(let i=0; i<checkyear.length; i++){
        if(arr.includes(checkyear[i])){
            continue;
        } else {
            str += "Year not valid ";
            break;
        }
    }
 }
    let today = new Date();
    let userYear = Math.abs(today.getUTCFullYear() - parseInt(year));
    let userMonth = Math.abs((today.getUTCMonth()+1) - parseInt(month));
    let userdate = Math.abs(today.getUTCDate() - parseInt(date));
    if(userMonth && userYear && userdate && str==""){
        document.getElementById("final").innerHTML = `Your age is ${userYear} years ${userMonth} month ${userdate} days`
    }
   

    document.getElementById("display").innerHTML = str

    document.getElementById("Date").innerText = "";
    document.getElementById("month").innerHTML = "";
    document.getElementById("year").innerHTML = "";
}