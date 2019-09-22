//window.addEventListener('load', loadTable(), false);

function navigateKL(){
    console.log("Clicked Kawhi Leonard");
    window.location = "firstPanel.html";
}

function navigateGA(){
    console.log("Clicked Giannis Antetokounmpo");
    window.location = "secondPanel.html";
}

function navigateJH(){
    console.log("Clicked James Harden");
    window.location = "thirdPanel.html";
}

function navigateLJ(){
    console.log("Clicked Lebron James");
    window.location = "fourthPanel.html";
}

function navigateTest(){
    console.log("Clicked Test Page");
    window.location = "test.html";
}

function loadTable(){
    var table = document.getElementById("table");
    var recordItem = firebase.database().ref('LebronJames/Regular/0'); 
    
    console.log("loading table");

    recordItem.once('value').then(function(snapshot){
        var statObj = snapshot.val();
        console.log(Object.keys(statObj));
        var row = document.createElement("tr");

        Object.keys(statObj).forEach(function(key) {
            console.log(key, statObj[key]);
            
            var cell = document.createElement("td"); 
            cell.innerHTML = statObj[key]; 
            row.appendChild(cell); 
        });
        
        table.appendChild(row);
    });
}

function insertData(){
    var table = document.getElementById("table");
    var recordItem = firebase.database().ref('LebronJames')
}