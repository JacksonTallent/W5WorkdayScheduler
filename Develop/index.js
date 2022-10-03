const thecontainer = $(".container");
let initHour = moment();
//todo check LS on startup to see notes
// 

function saveToLS(hour, content) {
    console.log(`Content: ${content}`);
    console.log(`~~~~`);
    console.log(`Hour: ${hour}`);
}

function drawSchedule() {
    const twelve = (number) => {return number > 12 ? number-12 : number}

    for (i=9; i<18; i++){
        let timeblock = $(`#${twelve(i)}h`);
        let newHour = moment(i, "HH")
        if (moment(i, "HH").isBefore(initHour)) {
            timeblock.css("background-color", "red");
        }
        else if (moment(i, "HH").isAfter(initHour)) {
            timeblock.css("background-color", "green")
        }
        else if (initHour.isSame(moment(i, "HH"))) {
            timeblock.css("background-color", "gray")
            console.log("hi")
        }
           $(`#${i}b`).on("click",(event)=>{ 
            event.stopPropagation;
            saveToLS(i,$(`#${i}i`).val());
        })
    }
}
drawSchedule();
console.log(initHour);
console.log(moment(14,"HH"));