// По шаблону выбрать фильмы, отобразить итоговую стоимость заказа. 
// В консоль вывести названия заказанных фильмов и стомость всех фильмов

window.onload = function (){

    var data = [];
    var movie = document.querySelectorAll('.cinema__item');
    console.log(movie);

    movie.forEach(function(item){
        data.push({
            title: item.querySelector('td:first-child').innerHTML,
            price: item.querySelector('td:last-child').innerHTML
        })
    });
    console.log(data);

    var sum = data.filter(function(item){
        return item.title && item.price
    }).reduce(function(prev, item){
        console.log(item.title);
        return prev + parseInt(item.price);
    }, 0)

    
    console.log('sum is ' + sum);

    

    // №2 -----------------------------------

    // Дано массив строк. В каждой необходимо найти позицию совпадения match. 
    // Все совпадения сохранить в строку через разделитель.
    // результат: "4, 0, 9, 4"

    // var match ="hello" ["1234hello", "hellohd;lfmg", 
    // "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"]


    var arr = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
    var match = "hello";

    console.log(arr.filter(function(item){
        return item.indexOf(match);
    })
    )
}