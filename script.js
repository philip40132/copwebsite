function updateCount(){
const count = Math.floor(9000 + Math.random()*7000);
const el = document.getElementById("count");
if(el){
el.innerText = "Active adherents: " + count;
}
}

updateCount();

/* hidden ARG trigger */
let keys = [];
document.addEventListener("keydown", (e)=>{
keys.push(e.key.toLowerCase());
keys = keys.slice(-6);

if(keys.join("") === "phillp"){
window.location.href = "arg/silence.html";
}
});
