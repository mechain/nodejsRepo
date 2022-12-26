let a = "truea";
let b = a == "true" || a == "false" || !a ? a : "error"
if(b == "error") console.log("accept only boolean")
let c = b =="true" ? true : false ;
console.log(typeof c)
console.log(c)