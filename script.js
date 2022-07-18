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
    document.querySelectorAll(".cell").forEach(cell =>{
        cell.addEventListener('click', ()=>{
            console.log(cell.id)
        })
    })
    return {
        cellArray,
        displayArray
    };
})();

console.log(board.cellArray)
board.displayArray()