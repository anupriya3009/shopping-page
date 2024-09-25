const bar =document.getElementById('bar');
const nav = document.getElementById('navbar');
const close =document.getElementById('close');
if(bar){
    bar.addEventListener('click',() => {
    console.log("amu")
    nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

function deleteRow(rowIndex) {
    var table = document.getElementById("tbl");
    if (rowIndex > -1 && rowIndex < table.rows.length) {
      table.deleteRow(rowIndex);
    }
  }

