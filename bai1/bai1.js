var calendar = document.getElementById("dateId");
var monthId = document.getElementById("monthId");
var yearId = document.getElementById("yearId");


monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


var currentDate = new Date();
var month = currentDate.getMonth() + 1;

var year = currentDate.getFullYear();
var cdate = currentDate.getDate();


Object.prototype.addLocation = function () {
    this.classList.add("checked");
}

Object.prototype.removeLocation = function () {
    this.classList.remove("checked");
}

function createCalendar(month, year, date) {
    var check = new Date();
    if(check.getMonth() + 1 == month && check.getFullYear() == year ){
        var note = true;
        date = check.getDate();
        console.log("true");
    }
    var numberOfDays = getDaysInMonth(year, month);
    calendar.innerHTML = "";

    var dayStartOrder = getDayOfWeek(year, month, 1) - 1;
    if (dayStartOrder == -1) {
        dayStartOrder = 6;
    }
    if (numberOfDays == 0) {
        rows = Math.ceil((numberOfDays - 1) / 7) + 1;

    }
    else {
        rows = Math.ceil((numberOfDays - 7 + dayStartOrder - 1) / 7) + 1;
    }



    var rowsElement = [];

    let startNumber = 1;

    var location = 0;

    if (note == true) {
        location = getDayOfWeek(year, month, date);
    }

    for (var i = 0; i < rows; i++) {
        rowsElement = [];
        let cols = 0;
        let start = 0;
        if (startNumber < 8 && startNumber == 1) {
            start = dayStartOrder;
        } else {
            start = 0;
        }
        if (startNumber <= (numberOfDays - 7)) {
            cols = 7;
        } else {
            cols = numberOfDays - startNumber + 1;
        }
        for (var j = 0; j < 7; j++) {
            let newTb = document.createElement("td");
            rowsElement.push(newTb);

        }

        if (note == true) {
            if (date >= startNumber && date <= startNumber + 7) {
                rowsElement[location].addLocation();
            }
        }
        for (var z = start; z < cols; z++) {
            rowsElement[z].setAttribute("id", `date${startNumber}`);
            rowsElement[z].innerText = startNumber;
            startNumber++;
        }


        trElement = document.createElement("tr");
        for (var x = 0; x < 7; x++) {
            trElement.appendChild(rowsElement[x]);
        }

        calendar.appendChild(trElement);

    }

    monthId.innerText = monthList[month - 1];
    yearId.innerText = year;
}

window.onload = createCalendar(month, year, cdate, true);


function getDaysInMonth(year, month) {
    // JavaScript month là 0-indexed, nên trừ đi 1 để làm cho tháng trở thành 0-indexed
    month = month - 1;

    // Tạo một đối tượng Date với ngày 0 (ngày cuối cùng của tháng trước)
    var lastDayOfMonth = new Date(year, month + 1, 0);

    // Lấy ngày cuối cùng của tháng
    var numberOfDays = lastDayOfMonth.getDate();

    return numberOfDays;
}

function getDayOfWeek(year, month, day) {
    // JavaScript month là 0-indexed, nên trừ đi 1 để làm cho tháng trở thành 0-indexed
    month = month - 1;

    // Tạo một đối tượng Date với ngày cụ thể
    var specifiedDate = new Date(year, month, day);

    // Lấy số thứ tự của ngày trong tuần (0 là Chủ Nhật, 1 là Thứ Hai, ..., 6 là Thứ Bảy)
    var dayOfWeek = specifiedDate.getDay();

    return dayOfWeek;
}

function increase() {
    if (month == 12) {
        month = 1;
        year++;
    } else month++;
    createCalendar(month, year, 1);
}

function decrease() {
    if (month == 1) {
        month = 12;
        year--;
    } else month--;
    let numberOfDays = getDaysInMonth(year, month);
    console.log(month, year, 1);
    createCalendar(month, year, 1);

}