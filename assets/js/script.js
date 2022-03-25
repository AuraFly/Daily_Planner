$(document).ready(function(){

var localTime = moment().format('LTS');
var momentTime = moment().format('hh:mm');
var localDay = moment().format("dddd, MMMM Do YYYY");

let headerTime = function() {
    var localTime = moment().format('LTS');
    $("#currentDay").text("Today is " + localDay + " and your local time is " + localTime);
};



    
    $(".continueBtn").click(function(){
    
    let nField = $(".nameForm").val();
    localStorage.setItem("nField", nField);

    $(".jtCovH1").text("Thank you, " + nField + ".");
    $(".jtCovP").text("Lets take a look at your day.");
    $(".continueBtn").hide();
    $(".nameForm").hide();
    
    if (moment().isBefore(moment('06:00', 'hh:mm'))){
        $(".greeting").text("Good night, " + localStorage.getItem("nField") + ".").css('color', 'purple');
        $(".planImg").attr("src", "./assets/imgs/night.png");
            } else if (moment().isBefore(moment('12:00', 'hh:mm'))){
                $(".greeting").text("Good morning, " + localStorage.getItem("nField") + ".").css('color', 'orange');
                $(".planImg").attr("src", "./assets/imgs/morning.png");
            } else if (moment().isBefore(moment('17:00', 'hh:mm'))){
                $(".greeting").text("Good afternoon, " + localStorage.getItem("nField") + ".").css('color', 'green');
                $(".planImg").attr("src", "./assets/imgs/day.png");
            } else if (moment().isBefore(moment('23:59', 'hh:mm'))){
                $(".greeting").text("Good evening, " + localStorage.getItem("nField") + ".").css('color', 'blue');
                $(".planImg").attr("src", "./assets/imgs/evening.png");
        }


    $(".jtCovMain").fadeToggle(3000);
    $(".planImg").hide().fadeIn(4000);
    $(".greeting").hide().fadeIn(4000);
    });


headerTime();
setInterval(headerTime, 1000);
});

