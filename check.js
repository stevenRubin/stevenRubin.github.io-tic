function checkStatus(arr) {
    if (arr[1] == "X" && arr[2] == "X" && arr[3] == "X" || arr[4] == "X" && arr[5] == "X" && arr[6] == "X" ||
        arr[7] == "X" && arr[8] == "X" && arr[9] == "X" || arr[1] == "X" && arr[5] == "X" && arr[9] == "X" ||
        arr[3] == "X" && arr[5] == "X" && arr[7] == "X" || arr[1] == "X" && arr[4] == "X" && arr[7] == "X" ||
        arr[2] == "X" && arr[5] == "X" && arr[8] == "X" || arr[3] == "X" && arr[6] == "X" && arr[9] == "X") {
        document.getElementById("d2").innerHTML = "<b>" + name + " won</b>";
        return true;
    }
    else if (arr[1] == "O" && arr[2] == "O" && arr[3] == "O" || arr[4] == "O" && arr[5] == "O" && arr[6] == "O" ||
        arr[7] == "O" && arr[8] == "O" && arr[9] == "O" || arr[1] == "O" && arr[5] == "O" && arr[9] == "O" ||
        arr[3] == "O" && arr[5] == "O" && arr[7] == "O" || arr[1] == "O" && arr[4] == "O" && arr[7] == "O" ||
        arr[2] == "O" && arr[5] == "O" && arr[8] == "O" || arr[3] == "O" && arr[6] == "O" && arr[9] == "O") {
        document.getElementById("d2").innerHTML = "<b>the Computer won</b>";
        return true;
    }
    else {
        for (var i = 1; i <= 9; i++) {
            if (arr[i] != "X" && arr[i] != "O") {
                return false;
            }
        }
        document.getElementById("d2").innerHTML = "<b>its a tie</b>";
        return true;
    }
}
//# sourceMappingURL=check.js.map