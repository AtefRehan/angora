var friends = [{name:'alice', age:30}
,{name:'omer', age:22}
,{name:'alice', age:44}
]

var box='';

function disp(){
    for(var i = 0; i < friends.length; i++){

        box+= `<div class="col-4">
        <div class="item bg-info">
            <h2>Name:+ ${friends[i].name} </h2>
            <p>age:${friends[i].age}</p>
        </div>
    </div>`
    }
    document.getElementById('ROW').innerHTML=box;
}

console.log(disp());