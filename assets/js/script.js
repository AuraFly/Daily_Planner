$(document).ready(function(){
var localDay = moment().format("dddd, MMMM Do YYYY");

// function that shows the local date and time
let headerTime = function() {
    var localTime = moment().format('LTS');
    $("#currentDay").text("Today is " + localDay + " and your local time is " + localTime);
};

// controls cover page textfield and button, fades page when continue is clicked
// feeds name into header and also controls graphics and greeting
// Graphic and greeting in header change depending on morning, day, evening, and night
    $(".continueBtn").click(() => {

            let nField = $(".nameForm").val();
            localStorage.setItem("nField", nField);

            $(".jtCovH1").text("Thank you, " + nField + ".");
            $(".jtCovP").text("Lets take a look at your day.");
            $(".continueBtn").hide();
            $(".nameForm").hide();

            if (moment().isBefore(moment('06:00', 'hh:mm'))) {
                $(".greeting").text("Good night, " + localStorage.getItem("nField") + ".").css('color', 'purple');
                $(".planImg").attr("src", "./assets/imgs/night.png");
            } else if (moment().isBefore(moment('12:00', 'hh:mm'))) {
                $(".greeting").text("Good morning, " + localStorage.getItem("nField") + ".").css('color', 'orange');
                $(".planImg").attr("src", "./assets/imgs/morning.png");
            } else if (moment().isBefore(moment('17:00', 'hh:mm'))) {
                $(".greeting").text("Good afternoon, " + localStorage.getItem("nField") + ".").css('color', 'green');
                $(".planImg").attr("src", "./assets/imgs/day.png");
            } else if (moment().isBefore(moment('23:59', 'hh:mm'))) {
                $(".greeting").text("Good evening, " + localStorage.getItem("nField") + ".").css('color', 'blue');
                $(".planImg").attr("src", "./assets/imgs/evening.png");
            }


            $(".jtCovMain").fadeToggle(3000);
            $(".planImg").hide().fadeIn(5000);
            $(".greeting").hide().fadeIn(5000);
        });


headerTime();
setInterval(headerTime, 1000);
});

// grabs local storage info and stores into var (if existant)
dailyHrs2 = JSON.parse(localStorage.getItem("dailyHrs"));

// variable housing main object and properties used throughout code
var dailyHrs = [
    {listP: "1", Hr: moment("00:00", 'hh:mm'), tOd: "Night", usrDta: ""},
    {listP: "2", Hr: moment('01:00', 'hh:mm'), tOd: "Night", usrDta: ""},
    {listP: "3", Hr: moment('02:00', 'hh:mm'), tOd: "Night", usrDta: ""},
    {listP: "4", Hr: moment('03:00', 'hh:mm'), tOd: "Night", usrDta: ""},
    {listP: "5", Hr: moment('04:00', 'hh:mm'), tOd: "Night", usrDta: ""},
    {listP: "6", Hr: moment('05:00', 'hh:mm'), tOd: "Night", usrDta: ""},
    {listP: "7", Hr: moment('06:00', 'hh:mm'), tOd: "Morning", usrDta: ""},
    {listP: "8", Hr: moment('07:00', 'hh:mm'), tOd: "Morning", usrDta: ""},
    {listP: "9", Hr: moment('08:00', 'hh:mm'), tOd: "Morning", usrDta: ""},
    {listP: "10", Hr: moment('09:00', 'hh:mm'), tOd: "Morning", usrDta: ""},
    {listP: "11", Hr: moment('10:00', 'hh:mm'), tOd: "Morning", usrDta: ""},
    {listP: "12", Hr: moment('11:00', 'hh:mm'), tOd: "Morning", usrDta: ""},
    {listP: "13", Hr: moment('12:00', 'hh:mm'), tOd: "Day", usrDta: ""},
    {listP: "14", Hr: moment('13:00', 'hh:mm'), tOd: "Day", usrDta: ""},
    {listP: "15", Hr: moment('14:00', 'hh:mm'), tOd: "Day", usrDta: ""},
    {listP: "16", Hr: moment('15:00', 'hh:mm'), tOd: "Day", usrDta: ""},
    {listP: "17", Hr: moment('16:00', 'hh:mm'), tOd: "Day", usrDta: ""},
    {listP: "18", Hr: moment('17:00', 'hh:mm'), tOd: "Day", usrDta: ""},
    {listP: "19", Hr: moment('18:00', 'hh:mm'), tOd: "Evening", usrDta: ""},
    {listP: "20", Hr: moment('19:00', 'hh:mm'), tOd: "Evening", usrDta: ""},
    {listP: "21", Hr: moment('20:00', 'hh:mm'), tOd: "Evening", usrDta: ""},
    {listP: "22", Hr: moment('21:00', 'hh:mm'), tOd: "Evening", usrDta: ""},
    {listP: "23", Hr: moment('22:00', 'hh:mm'), tOd: "Evening", usrDta: ""},
    {listP: "24", Hr: moment('23:00', 'hh:mm'), tOd: "Evening", usrDta: ""},
];

// This says that if there is data that was stored earlier, use it instead.
if (dailyHrs2 !== null) {
    var dailyHrs = [
        {listP: "1", Hr: moment("00:00", 'hh:mm'), tOd: "Night", usrDta: dailyHrs2[0].usrDta},
        {listP: "2", Hr: moment('01:00', 'hh:mm'), tOd: "Night", usrDta: dailyHrs2[1].usrDta},
        {listP: "3", Hr: moment('02:00', 'hh:mm'), tOd: "Night", usrDta: dailyHrs2[2].usrDta},
        {listP: "4", Hr: moment('03:00', 'hh:mm'), tOd: "Night", usrDta: dailyHrs2[3].usrDta},
        {listP: "5", Hr: moment('04:00', 'hh:mm'), tOd: "Night", usrDta: dailyHrs2[4].usrDta},
        {listP: "6", Hr: moment('05:00', 'hh:mm'), tOd: "Night", usrDta: dailyHrs2[5].usrDta},
        {listP: "7", Hr: moment('06:00', 'hh:mm'), tOd: "Morning", usrDta: dailyHrs2[6].usrDta},
        {listP: "8", Hr: moment('07:00', 'hh:mm'), tOd: "Morning", usrDta: dailyHrs2[7].usrDta},
        {listP: "9", Hr: moment('08:00', 'hh:mm'), tOd: "Morning", usrDta: dailyHrs2[8].usrDta},
        {listP: "10", Hr: moment('09:00', 'hh:mm'), tOd: "Morning", usrDta: dailyHrs2[9].usrDta},
        {listP: "11", Hr: moment('10:00', 'hh:mm'), tOd: "Morning", usrDta: dailyHrs2[10].usrDta},
        {listP: "12", Hr: moment('11:00', 'hh:mm'), tOd: "Morning", usrDta: dailyHrs2[11].usrDta},
        {listP: "13", Hr: moment('12:00', 'hh:mm'), tOd: "Day", usrDta: dailyHrs2[12].usrDta},
        {listP: "14", Hr: moment('13:00', 'hh:mm'), tOd: "Day", usrDta: dailyHrs2[13].usrDta},
        {listP: "15", Hr: moment('14:00', 'hh:mm'), tOd: "Day", usrDta: dailyHrs2[14].usrDta},
        {listP: "16", Hr: moment('15:00', 'hh:mm'), tOd: "Day", usrDta: dailyHrs2[15].usrDta},
        {listP: "17", Hr: moment('16:00', 'hh:mm'), tOd: "Day", usrDta: dailyHrs2[16].usrDta},
        {listP: "18", Hr: moment('17:00', 'hh:mm'), tOd: "Day", usrDta: dailyHrs2[17].usrDta},
        {listP: "19", Hr: moment('18:00', 'hh:mm'), tOd: "Evening", usrDta: dailyHrs2[18].usrDta},
        {listP: "20", Hr: moment('19:00', 'hh:mm'), tOd: "Evening", usrDta: dailyHrs2[19].usrDta},
        {listP: "21", Hr: moment('20:00', 'hh:mm'), tOd: "Evening", usrDta: dailyHrs2[20].usrDta},
        {listP: "22", Hr: moment('21:00', 'hh:mm'), tOd: "Evening", usrDta: dailyHrs2[21].usrDta},
        {listP: "23", Hr: moment('22:00', 'hh:mm'), tOd: "Evening", usrDta: dailyHrs2[22].usrDta},
        {listP: "24", Hr: moment('23:00', 'hh:mm'), tOd: "Evening", usrDta: dailyHrs2[23].usrDta},
    ];
}

// Loop that creates html elements for each timeblock using data specified above.
dailyHrs.forEach((iteminLoop) => {
    var parentRow = $("<div>")
        .attr({
            "class": "row"
        });
    $(".mPlanner").append(parentRow);

    var hrRow = $("<div>")
        .text(iteminLoop.Hr._i)
        .attr({
            "class": "hour"
        });

    var tbRow = $("<input>")
        .attr({
            "class": "time-block col-9",
            "type": "text",
            "placeholder": "Enter your appointment here",
            "id": 'form' + iteminLoop.listP,
        });

    var svRow = $("<button>")
        .attr({
            "class": "saveBtn",
            "id": 'btn' + iteminLoop.listP,
        });

    if (iteminLoop.Hr._i < moment().format('HH:00')) {
        tbRow.attr({
            "class": "past",
        });

        } else if (iteminLoop.Hr._i === moment().format('HH:00')) {
            tbRow.attr({
                "class": "present",
            });

            } else if (moment(iteminLoop.Hr).isAfter(moment())) {
                tbRow.attr({
                    "class": "future",
                });
        };

    var icon4save = $("<i class='fas fa-pencil-alt fa-fw'></i>");

    svRow.append(icon4save);
    $(parentRow).append(hrRow, tbRow, svRow);

    });

// Loop takes the information that was entered in form and stores it into object
for (let i = 0; i < dailyHrs.length; i++) {
    b = i + 1;
    document.getElementById("form" + b).value = dailyHrs[i].usrDta;
}

// function that saves data to storage
    function saveAll() {
        localStorage.setItem("dailyHrs", JSON.stringify(dailyHrs));
    }

// several button events that triggers the form save process
$("#btn1").click(() => {
    let svInput = document.getElementById("form1").value;
    dailyHrs[0].usrDta = svInput;
    saveAll();
});
$("#btn2").click(() => {
    let svInput = document.getElementById("form2").value;
    dailyHrs[1].usrDta = svInput;
    saveAll();
});
$("#btn3").click(() => {
    let svInput = document.getElementById("form3").value;
    dailyHrs[2].usrDta = svInput;
    saveAll();
});
$("#btn4").click(() => {
    let svInput = document.getElementById("form4").value;
    dailyHrs[3].usrDta = svInput;
    saveAll();
});
$("#btn5").click(() => {
    let svInput = document.getElementById("form5").value;
    dailyHrs[4].usrDta = svInput;
    saveAll();
});
$("#btn6").click(() => {
    let svInput = document.getElementById("form6").value;
    dailyHrs[5].usrDta = svInput;
    saveAll();
});
$("#btn7").click(() => {
    let svInput = document.getElementById("form7").value;
    dailyHrs[6].usrDta = svInput;
    saveAll();
});
$("#btn8").click(() => {
    let svInput = document.getElementById("form8").value;
    dailyHrs[7].usrDta = svInput;
    saveAll();
});
$("#btn9").click(() => {
    let svInput = document.getElementById("form9").value;
    dailyHrs[8].usrDta = svInput;
    saveAll();
});
$("#btn10").click(() => {
    let svInput = document.getElementById("form10").value;
    dailyHrs[9].usrDta = svInput;
    saveAll();
});
$("#btn11").click(() => {
    let svInput = document.getElementById("form11").value;
    dailyHrs[10].usrDta = svInput;
    saveAll();
});
$("#btn12").click(() => {
    let svInput = document.getElementById("form12").value;
    dailyHrs[11].usrDta = svInput;
    saveAll();
});
$("#btn13").click(() => {
    let svInput = document.getElementById("form13").value;
    dailyHrs[12].usrDta = svInput;
    saveAll();
});
$("#btn14").click(() => {
    let svInput = document.getElementById("form14").value;
    dailyHrs[13].usrDta = svInput;
    saveAll();
});
$("#btn15").click(() => {
    let svInput = document.getElementById("form15").value;
    dailyHrs[14].usrDta = svInput;
    saveAll();
});
$("#btn16").click(() => {
    let svInput = document.getElementById("form16").value;
    dailyHrs[15].usrDta = svInput;
    saveAll();
});
$("#btn17").click(() => {
    let svInput = document.getElementById("form17").value;
    dailyHrs[16].usrDta = svInput;
    saveAll();
});
$("#btn18").click(() => {
    let svInput = document.getElementById("form18").value;
    dailyHrs[17].usrDta = svInput;
    saveAll();
});
$("#btn19").click(() => {
    let svInput = document.getElementById("form19").value;
    dailyHrs[18].usrDta = svInput;
    saveAll();
});
$("#btn20").click(() => {
    let svInput = document.getElementById("form20").value;
    dailyHrs[19].usrDta = svInput;
    saveAll();
});
$("#btn21").click(() => {
    let svInput = document.getElementById("form21").value;
    dailyHrs[20].usrDta = svInput;
    saveAll();
});
$("#btn22").click(() => {
    let svInput = document.getElementById("form22").value;
    dailyHrs[21].usrDta = svInput;
    saveAll();
});
$("#btn23").click(() => {
    let svInput = document.getElementById("form23").value;
    dailyHrs[22].usrDta = svInput;
    saveAll();
});
$("#btn24").click(() => {
    let svInput = document.getElementById("form24").value;
    dailyHrs[23].usrDta = svInput;
    saveAll();
});
