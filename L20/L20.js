class C1 {
    constructor(p2){
        this.p2 = p2;
    }
}

class C2 extends C1{
    constructor(p1, p2, p3){
        super(p2)
        this.p1 = p1;
        this.p3 = p3;
    }
}

class C3 extends C2{
    constructor(p1, p2, p3, p4){
        super(p1, p2, p3)
        this.p4 = p4;
    }
}

var res = new C3( 1, 2, 3, 4 );

console.log(res);

//-----------------------------------

window.onload = function () {

    class HtmlItem {

        static render(tagName, target){
            var elem = document.createElement(tagName);
            target.appendChild(elem);
        }
    
    }
    
    HtmlItem.render('div', document.body);
    
    
}
