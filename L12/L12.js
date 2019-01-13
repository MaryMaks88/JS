//  L12

function SupperArray(n, m, options){

    var arr = new Array(n);

    var min = options.min;
    var max = options.max;
    
    for(var i = 0; i < arr.length; i++){

        arr[i] = new Array(m);

        for (var j = 0; j < arr[i].length; j++){

            arr[i][j] = Math.floor(Math.random()*(max - min) + min);

        }
    }
    
    this.list = arr;
}

SupperArray.prototype.render = function(sep){
    sep = sep || '-';
    for(var i = 0; i < this.list.length; i++){
        for (var j = 0; j < this.list[i].length; j++){
        }
    }

    for(var k = 0; k <= 10; k++){
        document.write(sep);
    }
    document.write('<br />');
}

var newArr = new SupperArray(5, 5, { min: 10, max: 35 });

// --------------------------------------

SupperArray.prototype.Clear = function (dir, k){
    for(var i = 0; i < this.list.length; i++){
        for (var j = 0; j < this.list[i].length; j++){
            document.write(this.list[i][j] + ' '); 

        }
        document.write('<br />');

        if (dir == 'column'){
            j = k;
            this.list[i][k] = 0;   
        }   
        
    }    
    
}

console.log(newArr);
console.log(newArr.clear('column' , 1));

console.log(newArr.render('-'));
