const player = (name, element) => {
    const getName = () => name;
    const getElement = () => element;
    const setName = (newName) => {
        name = newName;
    }
    return {
        getName,
        getElement,
        setName
    }
}
const board = (() => {
    let cellArray = ["", "", "", "", "", "", "", "", ""];
    const populateArray = () => {
        for (let i = 0; i < 9; i++) {
            cellArray.push(document.getElementById(i))
        }
    }
    const updateCell = (index, element) => {
        let temp = document.getElementById(index)
        temp.textContent = element
    }
    const displayArray = () => {
        for (let i = 0; i < 9; i++) {
            console.log(cellArray)
            console.log(board.cellArray)
            updateCell(i, board.cellArray[i])
        }
    }
    const fillArray = () => {
        board.cellArray = Array(9).fill("")
        console.log(cellArray)
    }


    return {
        cellArray,
        displayArray, fillArray
    };
})();
const gameFlow = (() => {
    let status = true;
    const player1 = player('John', 'X')
    const player2 = player('Bob', 'O')
    const getStatus = () => status;
    const changeStatus = () => {
        status = !status;
    }
    const handleWin = () => {
        if (!status) {
            alert(player1.getName() + " wins!")
        }
        else
            alert(player2.getName() + " wins!")
    }
    const checkForWin = () => {
        console.log("testing")
        if (board.cellArray[0] == board.cellArray[1] && board.cellArray[0] == board.cellArray[2] && board.cellArray[0] !== "")
            handleWin();
        else if (board.cellArray[3] == board.cellArray[4] && board.cellArray[3] == board.cellArray[5] && board.cellArray[3] !== "")
            handleWin();
        else if (board.cellArray[6] == board.cellArray[7] && board.cellArray[7] == board.cellArray[8] && board.cellArray[7] !== "")
            handleWin();
        else if (board.cellArray[0] == board.cellArray[3] && board.cellArray[0] == board.cellArray[6] && board.cellArray[0] !== "")
            handleWin();
        else if (board.cellArray[1] == board.cellArray[4] && board.cellArray[1] == board.cellArray[7] && board.cellArray[1] !== "")
            handleWin();
        else if (board.cellArray[2] == board.cellArray[5] && board.cellArray[2] == board.cellArray[8] && board.cellArray[2] !== "")
            handleWin();
        else if (board.cellArray[0] == board.cellArray[4] && board.cellArray[0] == board.cellArray[8] && board.cellArray[0] !== "")
            handleWin();
        else if (board.cellArray[2] == board.cellArray[4] && board.cellArray[2] == board.cellArray[6] && board.cellArray[2] !== "")
            handleWin();
    }

    const handlePlay = (status, cell) => {
        //console.log('halp me')
        let element
        if (status)
            element = player1.getElement();
        else
            element = player2.getElement()
        if (board.cellArray[cell.id] == "") {
            board.cellArray[cell.id] = element;
            gameFlow.changeStatus();
            board.displayArray();
            gameFlow.checkForWin();
        }
    }
    const startRound = (name1, name2) => {
        status=true;
        player1.setName(name1)
        player2.setName(name2)
        /*console.log(player1.getName())
        console.log(player2.getName())*/
        board.fillArray()
        board.displayArray()

    }
    return {
        changeStatus, getStatus, handlePlay, startRound, checkForWin
    };
})();

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener('click', () => {
         console.log("why")
        gameFlow.handlePlay(gameFlow.getStatus(), cell)
    })
})
document.querySelector(".start").addEventListener('click', () => {
    console.log("test")
    gameFlow.startRound(document.getElementById("p1").value, document.getElementById("p2").value)

})
//console.log(board.cellArray)
board.displayArray()