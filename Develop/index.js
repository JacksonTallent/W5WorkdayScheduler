let initHour = moment();


//Checks if the content from local storage is from the same date then populates input fields with the saved text
function loadFromLS() {
    let momentobj = moment(localStorage.getItem("momentobj"));
    if (momentobj.isSame(initHour, "date")) {
        for (i=9;i<18;i++) {
            $(`#${i}i`).val(localStorage.getItem(i));
        }
    }
}

//Saves the selected hours text area
function saveToLS(hour, content) {
    localStorage.setItem(hour, content);
}

//Colors timeblocks depending on the time
function drawSchedule() {
    const twelve = (number) => {return number > 12 ? number-12 : number}
    for (i=9; i<18; i++){
        let timeblock = $(`#${i}i`);

        if (i < initHour.hour()) {
            timeblock.addClass("past");
        }
        else if (i > initHour.hour()) {
            timeblock.addClass("future");
        }
        else if (initHour.hour() === i) {
            timeblock.addClass("present");
        }
    }
}

//Tells the current date in the jumbotron
$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));

loadFromLS();
//Updates the momentobj that is compared to the current time.
localStorage.setItem("momentobj", initHour)
drawSchedule();
