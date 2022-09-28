const thecontainer = $(".container");
let initHour = moment().hour();
if (initHour > 12) initHour -= 12;
//todo check LS on startup to see notes
// 

function saveToLS(hour, content) {
    console.log(`Content: ${content}`);
    console.log(`~~~~`);
    console.log(`Hour: ${hour}`);
}

function drawSchedule() {
    let hourVar = 9;

    for (i=0; i<9; i++){
        let timeblock = $("<div>").attr("id",`tb${hourVar}`);
        let twelve = hourVar-12;
        let clock = $("<h2>").html(()=>{
            if (hourVar > 12) return twelve
            else return hourVar
        })
    
        if (initHour > hourVar) {
            timeblock.css("background-color", "red");
        }
        else if (initHour < hourVar) {
            timeblock.css("background-color", "green")
        }
        else {
            timeblock.css("background-color", "gray")
            console.log("3")
        }
        let input = $("<input>").val("hi")
        let saveButton = $("<button>").attr("id", hourVar).click(saveToLS(hourVar,input.val()));
    
        timeblock.append(saveButton);
        timeblock.append(clock);
        timeblock.append(input);
        thecontainer.append(timeblock);
        hourVar++;
    }
}
drawSchedule();
console.log(initHour);
