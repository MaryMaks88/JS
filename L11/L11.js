// L11


var actions = {

    sum: function(x, y){
        return obj.x + obj.y;
     } ,

    sub: function(x, y){
        return obj.x - obj.y;
     } ,
    
    mul: function(x, y){
        return obj.x * obj.y;
     } ,
    
    div: function(x, y){
        return obj.x / obj.y;
     } ,

    mod: function(x, y){
        return obj.x % obj.y;
     }

}


function SuperMath (obj){ 

    this.obj = obj;
    this.input = function (){
    SuperMath.prototype = actions;
    }
    this.check = function(x, y, znak){
        if(confirm('Вы уверены, что хотите произвести действие?')){
            
            if( obj.znak == '+'){
               SuperMath.sum(x, y); 
            } else if( znak == '-'){
               SuperMath.sub(x, y); 
            } else if( znak == '*'){
               SuperMath.mul(x, y); 
            } else if( znak == '/'){
               SuperMath.div(x, y);  
            } else if( znak == '%'){
               SuperMath.mod(x, y);  
            } 
         } else {
            SuperMath.input();
         }
    return res
    }

}

var obj = {x:2, y:2, znak:'+'};

p = new SuperMath(obj);
p.check();
