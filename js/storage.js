let store={
    name:"",
}

// let a=document.querySelector("#next").addEventListener("click",()=>{
//     store.name=document.getElementById("first_name").value;
//     console.log(store.name);
//     console.log(first_name);
// });
let a = document.querySelector("#next");
a.addEventListener('click',()=>{
    let v = document.getElementById("first_name").value;
    let b = document.getElementById("last_name").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("phone").value;
    let e = document.getElementById("display").value;
    let f = document.getElementById("passion").value;
    // let g = document.getElementById("ownKitchen").value;
    //  document.getElementById("demo").innerHTML = g;
    // let h = document.getElementById("phone").value;
    // let i = document.getElementById("display").value;
    
    // let g =document.querySelectorAll('.form-group #ownKitchen').value;
    let g = document.querySelector('input[name="locationType"]:checked').value;
    let h = document.querySelector('input[name="locationType2"]:checked').value;
    let i = document.querySelectorAll('input[name="cuisines"]:checked').value;




    console.log(v);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(f);
    console.log(e);
    console.log(g);
    console.log(h);
    console.log(i);
    
})
// console.log(a);

// function draw(){
// let a = document.getElementById("first_name").value;
// let b = document.getElementById("last_name").value;
// let c = document.getElementById("email").value;
// // let d = document.getElementById("phone").value;
// let e = document.getElementById("display").value;
// let f = document.getElementById("passion").value;
// // let g = document.getElementById("").value;
// let h = document.getElementById("phone").value;
// let i = document.getElementById("display").value;
// console.log(a)
// }

// draw();

// draw()(onclick);
function onload (){
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , "./img/tema/team-1.jpg");
     xhr.responseType= "arraybuffer";
     xhr.onload= function(e){
         var blob = new Blob([xhr.response]);
         var url = URL.createObjectURL(blob);
         console.log(url);
         var img = document.getElementById("image");
         img.src = url;
     }
         xhr.send();
     
}