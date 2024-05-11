// let hd = document.querySelector('.para');

// hd.innerHTML = 'Helloo world';



/*-------------------Grading System---------------------- */

// let a = prompt('Enter a number');

// a = Number(a);


// if(a<0 && a>100){
//     console.log('Number is unacceptable');
// }

// else if(a>=80 && a<=100){
//     console.log('A+');
// }

// else if(a>=70 && a<80){
//     console.log('A');
// }

// else if(a>=60 && a<70){
//     console.log('A-');
// }
// else if(a>=50 && a<60){
//     console.log('B');
// }
// else if(a>=40 && a<50){
//     console.log('C');
// }
// else{
//     console.log('F');
// }

/*-------------------Grading System---------------------- */

let on = document.querySelector('.on');
let img = document.querySelector('.image');
let off = document.querySelector('.off');


on.addEventListener("click", function(){
    img.src = 'pic_bulbon.gif';
});


off.addEventListener("click", function(){
    img.src = 'pic_bulboff.gif';
}
    
);
