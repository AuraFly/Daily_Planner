// WIP - just a placeholder for now
var nameBtn = document.getElementById("nameBtn");
var coverP = document.querySelector(".jtCovMain");
var nField;


$("nameBtn").click(function() {
    var nField = document.getElementById("nameForm").value;

        localStorage.setItem("nField", nField);

        jtCovMain.textContent = "Thank you, " + nField + ".";

        mainPage();
        $(".jtCovMain").fadeToggle(3000);
        console.log(nField)
    });