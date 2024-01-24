var table = document.getElementById("triangleTable");
var tongCC = document.getElementById("tongCC");
var tongDCT = document.getElementById("tongDCT");
var tongDCP = document.getElementById("tongDCP");
var tongCD = document.getElementById("tongCD");

function checkValue(element) { 
    let value = element.value;
    if(isNaN(value) || parseInt(value) < 0 || parseInt(value) > 10) {
        alert('Số không hợp lệ ! Vui lòng nhập lại');
        element.value = "";
        element.focus();
    }
}




function VeTamGiacCan() {
    table.innerHTML = "";
    let value = document.getElementById("textfield").value;  
    let rows = parseInt(value);
    let cols = 1 + 2*(rows - 1); 
    let middle = parseInt(cols /2);
    var rowsElement = [];
    let startNumber = 0;
    
    // ! Biến tính toán
    let tongChieuCao = 0;
    let tongDCTrai = 0;
    let tongDCPhai = 0;
    let tongCDay = 0;

    for(var i = 0; i < rows; i++) {
        rowsElement = [];
        var color;
        if(i % 2 == 0) {
            color = "blue";
        } else
        {
            color = 'pink';
        }
        for(var j = 0; j < cols; j++)
        {    
            let newTb = document.createElement("td");
            rowsElement.push(newTb);
            
        }
        
        for(var z = middle - i; z <= middle + i; z++)
        {
            console.log(z);
            rowsElement[z].classList.add(color);
            rowsElement[z].innerText = startNumber;
            startNumber++;
        }

        var trElement = document.createElement("tr");
        for(var x = 0; x < cols; x++){
            trElement.appendChild(rowsElement[x]);    
        }
        
        console.log(trElement);
        table.appendChild(trElement);

        tongChieuCao += parseInt(rowsElement[middle].innerText);  
        tongDCTrai += parseInt(rowsElement[middle - i].innerText);
        tongDCPhai += parseInt(rowsElement[middle + i].innerText);
        if(i == rows - 1)
        {
            for(var j = 0; j < cols; j++)
            {
                tongCDay += parseInt(rowsElement[j].innerText);
            }
        }
    
    }   
    tongCC.innerText = tongChieuCao;
    tongDCT.innerText = tongDCTrai;
    tongDCP.innerText = tongDCPhai;
    tongCD.innerText = tongCDay;
}


function VeTamGiacVuong() {
    table.innerHTML = "";
    let value = document.getElementById("textfield").value;  
    let rows = parseInt(value);
    let cols = parseInt(value);
    let startCell = 0;
    var rowsElement = [];
    let startNumber = 0;

    // ! Biến tính toán
    let tongChieuCao = 0;
    let tongDCTrai = 0;
    let tongDCPhai = 0;
    let tongCDay = 0;

    for(var i = 0; i < rows; i++) {
        rowsElement = [];
        var color;
        if(i % 2 == 0) {
            color = "blue";
        } else
        {
            color = 'pink';
        }
        for(var j = 0; j < cols; j++)
        {    
            let newTb = document.createElement("td");
            rowsElement.push(newTb);
            
        }
        
        for(var z = startCell; z <= startCell + i; z++)
        {
            console.log(z);
            rowsElement[z].classList.add(color);
            rowsElement[z].innerText = startNumber;
            startNumber++;
        }

        var trElement = document.createElement("tr");
        for(var x = 0; x < cols; x++){
            trElement.appendChild(rowsElement[x]);    
        }
        
        console.log(trElement);
        table.appendChild(trElement);

        tongChieuCao += parseInt(rowsElement[startCell].innerText);  
        tongDCTrai += parseInt(rowsElement[startCell].innerText);
        tongDCPhai += parseInt(rowsElement[startCell + i].innerText);
        if(i == rows - 1)
        {
            for(var j = 0; j < cols; j++)
            {
                tongCDay += parseInt(rowsElement[j].innerText);
            }
        }
    }

    tongCC.innerText = tongChieuCao;
    tongDCT.innerText = tongDCTrai;
    tongDCP.innerText = tongDCPhai;
    tongCD.innerText = tongCDay;
}