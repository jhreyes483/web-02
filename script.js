
var keys = ['numero', 'operador', 'multiplo', 'igual', 'resultado']
var numbers = [];
var obj = {};
var sel = document.getElementById('sel');

function number() {
    var num = sel.options[sel.selectedIndex].value;
    console.log(num);
    numbers = [];

    var Parent = document.getElementById('m-table');
    while(Parent.hasChildNodes())
    {
       Parent.removeChild(Parent.firstChild);
    }

    for (n=1;n<=10;n++) {
        result = num * n;
        for (i=0;i<keys.length;i++) {
            obj[keys[0]] = num;
            obj[keys[1]] = 'x';
            if (i==2) {
                obj[keys[i]] = n;
            }
            if (i==4) {
                obj[keys[i]] = result;
            }
            if (i==3) {
                obj[keys[i]] = '=';
            }
        }
        numbers.push(obj);
        obj = {};
    }

    function generateTableHead(table) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement('th');
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTableValue(table, array) {
        for (i=9;i>=0;i--) {
            var data2 = Object.values(array[i]);
            let row = table.insertRow(1);
            for (let value of data2) {
                let td = document.createElement('td');
                let text = document.createTextNode(value);
                td.appendChild(text);
                row.appendChild(td);
            }
        }
    }

    let table = document.getElementById('m-table');
    let data = Object.keys(numbers[0]);

    generateTableHead(table);

    generateTableValue(table, numbers);

    console.log(numbers[0]);
}