
var obj = {

    copy: function (buffer) {
        this[buffer] = 0;
        return this
    },

    clear: function (){
        this.result = 0;
        return this
    },

    doFunction: function (func, x, y) {
        this.result = func(x, y);
        return this
    },  

    target: function (property) {
        
        return this
    }

}

function sum(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}
 

obj.doFunction(sum, 2, 8).clear().copy('name');
console.log(obj);