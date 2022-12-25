
let tr = document.getElementById("usersInput")
let td = document.getElementById("usersSecondInput")

let table = document.getElementById("table")

function creatingOfTables (rows, columns){
    for(let i = 0; i < rows; i++){
        let tr = document.createElement("tr");
        for(let j = 0; j < columns; j++){
            let td = document.createElement("td");
            let text = document.createTextNode(`Row: ${i+1}, column: ${j+1}`)
            td.appendChild(text)
            tr.appendChild(td)
        }
        
        table.appendChild(tr)
    }
   
}
let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    creatingOfTables(tr.value, td.value)

    
})
