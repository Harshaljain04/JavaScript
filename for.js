/*for(let counter=1;counter<=10;counter+=2)
{
    if(counter == 3){
        continue;
    }
    else{
    console.log(counter)
    }
}*/

let symbol=window.prompt("Enter any symbol");
let rows=window.prompt("Enter rows");
let col=window.prompt("Enter cols");

for(let i=1;i<=rows;i+=1){
    for(let j=1;j<=col;j+=1){
        document.getElementById("rect").innerHTML+=symbol;
    }
    document.getElementById("rect").innerHTML+="<br>"
}