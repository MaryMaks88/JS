var str = `
<br />
<input />
<img src="hello"/>
e
qwe
qwe
qw
eqw
<table>
    <tr></tr>
</table>
<div></div>
qwe
qwe
qwe
qw
eqw
e
wq
`;


// var res = str.match(/(\<\w+\s\/\>)|(\w+)|(\<\w+\>)|(<\/\w+\>)/gi);
var res = str.match(/<[\w\s="']+\/?>/gi);

// var res = str.match(/(\<\w+\s\w+\=\"\w+\"\/\>)/gi);

console.log(res);