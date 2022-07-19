const player = (name, element)=>{
    const getName=()=> name;
    const getElement=()=> element;
    return{
        getName, 
        getElement
    }
}
const board = (() => {
    const cellArray = ["X", "O", "X", "X", "O", "X", "O", "X", "O"];
    const populateArray = () => {
        for (let i = 1; i <= 9; i++) {
            cellArray.push(document.getElementById(i))
        }
    }
    const updateCell = (index, element) => {
        let temp = document.getElementById(index)
        temp.textContent = element
    }
    const displayArray = () => {
        for (let i = 1; i < 10; i++) {
            updateCell(i, cellArray[i])
        }
    }
    return {
        cellArray,
        displayArray
    };
})();
const gameFlow = (() => {
    let status=false;
    const player1=player('John', 'X')
    const player2=player('Bob', 'O')
    const changeStatus=()=>{ 
        status=!status;
    }
    const handlePlay=(status, cell)=>{
        console.log('halp me')
        let element
        if(status)
        element=player1.getElement()
        else
        element=player2.getElement()
        board.cellArray[cell.id]=element
        gameFlow.changeStatus()
        board.displayArray()
    }
    const getStatus=()=> status;
    return {
        changeStatus, getStatus, handlePlay

    };
})();

document.querySelectorAll(".cell").forEach(cell =>{
    cell.addEventListener('click', ()=>{
        console.log("why")
        gameFlow.handlePlay(gameFlow.getStatus(), cell)
    })
})
player1=player('test', 'x')
console.log(board.cellArray)
board.displayArray()