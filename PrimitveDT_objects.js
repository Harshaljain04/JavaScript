//Primitve Datatypes - null nmber symbol string boolean bigint undefined
let a= null;
let b=324;
let c=true;//can also be false
let d=BigInt("898");
let e="Harshal";
let f=Symbol("Hello");
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof e)

//Non- Primitive Datatype - Objects in JS
const item={
    "Harshal":true,
    "Manasvi":true,
    "Vansh":false,
    "Manas":false,
    "ritik":undefined
}
console.log(item["Harshal"])