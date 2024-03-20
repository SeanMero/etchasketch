//put four flex:column divs inside containerOuter
const containerOuter = document.getElementById("containerOuter");
for (let i = 1; i < 17; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "columnDiv";
    containerOuter.appendChild(newDiv);
};

//create four divs inside each column
const columnDivsCollection = document.getElementsByClassName("columnDiv");
const columnDivs = Array.from(columnDivsCollection);

columnDivs.forEach(element => {
    for (let i = 1; i < 17; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "rowDiv";
        element.appendChild(newDiv);
    };
});