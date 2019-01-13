//----------------

function Field(height, width){

    this.height = height;
    this.width = width;

    this.newField = function(){

        var arr = new Array(this.height);
    
        for(var i = 0; i < arr.length; i++){

        arr[i] = new Array(this.width);

        for (var j = 0; j < arr[i].length; j++){

            arr[i][j] = 0;
            
        }  
    }
    console.log(arr);
    // this.list = arr;
    }   
}

Field.prototype.render = function(){

    document.write('<hr />');

        document.write('so hello');     
        
        document.write('<br />');

    document.write('<hr />');
}


// Field.prototype.clearField = function (){

// }

// Field.prototype.changeSize = function (newX, newY){

//     document.write('<hr />');

//     var arr = new Array(newX);
    
//     for(var i = 0; i < arr.length; i++){

//         arr[i] = new Array(newY);

//         for (var j = 0; j < arr[i].length; j++){

//             arr[i][j] = 0;

//             document.write(arr[i][j] + ' '); 
            
//         }
//         document.write('<br />');
//     }
//     this.list = arr;

//     document.write('<hr />');
// }



var field = new Field(10, 10);
// field.render();


// function Person (name, XPosition, YPosition, field){
// this.name = name;
// this.x = XPosition;
// this.y = YPosition;
// this.field = field;
// }

// Person.prototype.Start = function() {

//     Field.list([0][0]) = 1;
   
// }

// var person = new Person('Mark', 2, 3, field);
// Person.prototype = Object.create(Field.prototype);
