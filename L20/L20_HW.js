window.onload = function(){

    class Elem {
        constructor(name, target){
            this.name = name;
            this.target = target;
        }
        
        create () {
            let elem = document.createElement(this.name);
            this.elem = elem;
            this.target.appendChild(this.elem);
        
            return this.elem;
        }

        html(innerText){
            this.elem.innerHTML = innerText;
            
            return this.elem;
        }

        append(backText){
            let newElem = document.createElement('span');
            newElem.innerHTML = backText;
            this.target.appendChild(newElem);

            return this.elem;
        }

        prepend(frontText){
            let newElem = document.createElement('span');
            newElem.innerHTML = frontText;
            this.target.insertBefore(newElem, this.target.firstChild);

            return this.elem;
        }

        attr(key, value){
            this.elem.setAttribute(key, value);

            return this.elem;
        }
        
    }


   
    var elem = new Elem('hi', document.body);


    elem.create();
    elem.html('This is inner Text');
    elem.append('!'); //запишет в конец элемента '!'
    elem.prepend('!'); //запишет в начало элемента '!'
    elem.attr('class', 'www'); //запишет в атрибут class значение www

    // elem.html('hello').append('!').prepend('!');
    // elem.attr('class', 'www').attr('title', 'hello');
}