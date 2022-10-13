const thecontainer = $(".container");
let initHour = moment();
//TODO SAY DAY AND DATE AT TOP
// 

function loadFromLS() {
    let momentobj = moment(localStorage.getItem("momentobj"));
    if (momentobj.isSame(initHour, "date")) {
        for (i=9;i<18;i++) {
            $(`#${i}i`).val(localStorage.getItem(i));
        }
    }
    
}

function saveToLS(hour, content) {
    console.log(`Content: ${content}`);
    console.log(`~~~~`);
    console.log(`Hour: ${hour}`);
    localStorage.setItem(hour, content);
}

function drawSchedule() {
    const twelve = (number) => {return number > 12 ? number-12 : number}
    for (i=9; i<18; i++){
        let timeblock = $(`#${i}h`);

        if (i < initHour.hour()) {
            timeblock.addClass("past");
        }
        else if (i > initHour.hour()) {
            timeblock.addClass("future");
        }
        else if (initHour.hour() === i) {
            timeblock.addClass("present");
            console.log("hi")
        }
    }
}
loadFromLS();
localStorage.setItem("momentobj", initHour)
drawSchedule();
console.log(initHour.format());
console.log(moment(14,"HH"));