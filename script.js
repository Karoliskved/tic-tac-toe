const board = (() => {
    const cellArray=["X", "O", "X", "X", "O", "X", "O", "X", "O"];
    const populateArray=()=>{
        for(let i=1; i<=9; i++){
            cellArray.push(document.getElementById(i))
        }  }
    const displayArray=()=>{
        for(let i=1; i<10; i++){
            let temp=document.getElementById(i)
            console.log(temp)
            temp.textContent=cellArray[i]
        }
    }
    return {
        cellArray,
        displayArray
    };
  })();

  console.log(board.cellArray)
  board.displayArray()