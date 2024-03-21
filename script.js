//put 16 flex:column divs inside containerOuter
const containerOuter = document.getElementById("containerOuter");
for (let i = 1; i < 17; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "columnDiv";
    containerOuter.appendChild(newDiv);
};

//create 16 divs inside each column
let columnDivsCollection = document.getElementsByClassName("columnDiv");
let columnDivs = Array.from(columnDivsCollection);

columnDivs.forEach(element => {
    for (let i = 1; i < 17; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "rowDiv";
        element.appendChild(newDiv);
    };
});

//change rowDiv to a random color on hover
let rowDivCollection = document.getElementsByClassName("rowDiv");
let rowDivs = Array.from(rowDivCollection);

rowDivs.forEach(element => {
    element.addEventListener("mouseenter", function(e) {
        e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});

//get user's choice for side lengths
let userChose = 0;

const choice = document.getElementById("choice");
let userChoice = function() {
    userChose = prompt("Please enter the size");
    userChose = Number(userChose);
    return userChose;
};

choice.addEventListener("click", userChoice);

//reset Sketch according to user's choice
let baleet = function() {
    rowDivs.forEach(element => {
        element.remove();
     });
    columnDivs.forEach(element => {
        element.remove();
    });
    for (let i = 1; i <= userChose; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "columnDiv";
        containerOuter.appendChild(newDiv);
    };
    columnDivs = Array.from(columnDivsCollection);
    columnDivs.forEach(element => {
        for (let i = 1; i <= userChose; i++) {
            const newRow = document.createElement("div");
            newRow.className = "rowDiv";
            element.appendChild(newRow);
        };
    });
    rowDivs = Array.from(rowDivCollection);
    rowDivs.forEach(element => {
        element.addEventListener("mouseenter", function(e) {
            e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);;
        });
    });
};

choice.addEventListener("click", baleet)