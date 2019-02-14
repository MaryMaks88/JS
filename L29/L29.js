// В строке найти все теги (без атрибутов)
console.log('В строке найти все теги (без атрибутов)');
var str = `
hello
hi
<div></div>
<input />
hi
hello
`
var res = str.match(/<[\w\s\/]+?>(<\/\w+>)?/gi);
console.log(res);

//В строке найти все теги с аттрибутами любых форматов
console.log('В строке найти все теги с аттрибутами любых форматов');
var str = `
hello
hi
<div class="atribute"></div>
<input type="text" class="block_1" />
hi
hello
`
var res = str.match(/<[-\w\s="']+\/?>(<\/\w+>)?/gi);
console.log(res);

//В строке найти все теги с аттрибутом data-id
console.log('В строке найти все теги с аттрибутом data-id');
var str = `
hello
hi

<div data-id="block_1"></div>
<div class="atribute"></div>
<input data-id="block_2" class="color" />

hi
hello
`
var res = str.match(/<[-\w\s]+((data-id)[\w="'])+?([-\w\s="'])+?\/?>(<\/\w+>)?/gi);
console.log(res);