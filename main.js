function makeTable(){
    var table = document.getElementById('tab');
    var row = document.getElementById('rows').value;
    var col = document.getElementById('cols').value;


    for(var rowIndex =0; rowIndex<row; rowIndex++){
        var tr = document.createElement('tr');

        for(var colIndex = 0; colIndex<col; colIndex++ ){
            var td = document.createElement('td');
            //var text = document.createTextNode(" "+  colIndex);
            //td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


document.getElementById('make').addEventListener('click', makeTable);