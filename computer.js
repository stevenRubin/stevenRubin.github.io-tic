//*******try to find a way to win
function computerSelection(arr) {
    if (arr[1] == "O" && arr[2] == "O" && arr[3] != "X" ||
        arr[6] == "O" && arr[9] == "O" && arr[3] != "X" ||
        arr[5] == "O" && arr[7] == "O" && arr[3] != "X") {
        arr[3] = "O";
        return 3;
    }
    else if (arr[1] == "O" && arr[3] == "O" && arr[2] != "X" ||
        arr[5] == "O" && arr[8] == "O" && arr[2] != "X") {
        arr[2] = "O";
        return 2;
    }
    else if (arr[2] == "O" && arr[3] == "O" && arr[1] != "X" ||
        arr[4] == "O" && arr[7] == "O" && arr[1] != "X" ||
        arr[5] == "O" && arr[9] == "O" && arr[1] != "X") {
        arr[1] = "O";
        return 1;
    }
    else if (arr[4] == "O" && arr[5] == "O" && arr[6] != "X" ||
        arr[3] == "O" && arr[9] == "O" && arr[6] != "X") {
        arr[6] = "O";
        return 6;
    }
    else if (arr[4] == "O" && arr[6] == "O" && arr[5] != "X" ||
        arr[1] == "O" && arr[9] == "O" && arr[5] != "X" ||
        arr[3] == "O" && arr[7] == "O" && arr[5] != "X") {
        arr[5] = "O";
        return 5;
    }
    else if (arr[5] == "O" && arr[6] == "O" && arr[4] != "X" ||
        arr[1] == "O" && arr[7] == "O" && arr[4] != "X") {
        arr[4] = "O";
        return 4;
    }
    else if (arr[7] == "O" && arr[8] == "O" && arr[9] != "X" ||
        arr[6] == "O" && arr[3] == "O" && arr[9] != "X" ||
        arr[5] == "O" && arr[1] == "O" && arr[9] != "X") {
        arr[9] = "O";
        return 9;
    }
    else if (arr[7] == "O" && arr[9] == "O" && arr[8] != "X" ||
        arr[5] == "O" && arr[2] == "O" && arr[8] != "X") {
        arr[8] = "O";
        return 8;
    }
    else if (arr[8] == "O" && arr[9] == "O" && arr[7] != "X" ||
        arr[4] == "O" && arr[1] == "O" && arr[7] != "X" ||
        arr[5] == "O" && arr[3] == "O" && arr[7] != "X") {
        arr[7] = "O";
        return 7;
    }
    //******if the computer can not win so try to find to block the player from winning 
    else if (arr[1] == "X" && arr[2] == "X" && arr[3] != "O" ||
        arr[6] == "X" && arr[9] == "X" && arr[3] != "O" ||
        arr[5] == "X" && arr[7] == "X" && arr[3] != "O") {
        arr[3] = "O";
        return 3;
    }
    else if (arr[1] == "X" && arr[3] == "X" && arr[2] != "O" ||
        arr[5] == "X" && arr[8] == "X" && arr[2] != "O") {
        arr[2] = "O";
        return 2;
    }
    else if (arr[2] == "X" && arr[3] == "X" && arr[1] != "O" ||
        arr[4] == "X" && arr[7] == "X" && arr[1] != "O" ||
        arr[5] == "X" && arr[9] == "X" && arr[1] != "O") {
        arr[1] = "O";
        return 1;
    }
    else if (arr[4] == "X" && arr[5] == "X" && arr[6] != "O" ||
        arr[3] == "X" && arr[9] == "X" && arr[6] != "O") {
        arr[6] = "O";
        return 6;
    }
    else if (arr[4] == "X" && arr[6] == "X" && arr[5] != "O" ||
        arr[1] == "X" && arr[9] == "X" && arr[5] != "O" ||
        arr[3] == "X" && arr[7] == "X" && arr[5] != "O") {
        arr[5] = "O";
        return 5;
    }
    else if (arr[5] == "X" && arr[6] == "X" && arr[4] != "O" ||
        arr[1] == "X" && arr[7] == "X" && arr[4] != "O") {
        arr[4] = "O";
        return 4;
    }
    else if (arr[7] == "X" && arr[8] == "X" && arr[9] != "O" ||
        arr[6] == "X" && arr[3] == "X" && arr[9] != "O" ||
        arr[5] == "X" && arr[1] == "X" && arr[9] != "O") {
        arr[9] = "O";
        return 9;
    }
    else if (arr[7] == "X" && arr[9] == "X" && arr[8] != "O" ||
        arr[5] == "X" && arr[2] == "X" && arr[8] != "O") {
        arr[8] = "O";
        return 8;
    }
    else if (arr[8] == "X" && arr[9] == "X" && arr[7] != "O" ||
        arr[4] == "X" && arr[1] == "X" && arr[7] != "O" ||
        arr[5] == "X" && arr[3] == "X" && arr[7] != "O") {
        arr[7] = "O";
        return 7;
    }
    //*******if there is no way to win or block, find any available number
    else {
        var num = void 0;
        var test = false;
        do {
            num = Math.floor(Math.random() * 8) + 1;
            if (arr[num] == "X" || arr[num] == "O") {
                test = false;
            }
            else {
                arr[num] = "O";
                test = true;
            }
        } while (test == false);
        return num;
    }
}
//# sourceMappingURL=computer.js.map