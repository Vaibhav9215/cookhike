let store={
    name:"",
}

let a=document.querySelector("#next").addEventListener("click",()=>{
    store.name=document.getElementById("sample");
    console.log(store.name);
});
let b = document.getElementById("sample").value;
console.log(b);