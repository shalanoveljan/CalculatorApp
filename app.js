let input = document.querySelector('#input');
let buttons= document.querySelectorAll('button');

let string ="";
let arr=Array.from(buttons);

buttons.forEach(btn=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        string=eval(string);
        input.value=string;
        console.log(1);
    }

    else if (e.target.innerHTML=='AC'){

        string ="";
        input.value=string;
        console.log(2);


    }

    
    else if (e.target.innerHTML=='DEL'){

        string =string.substring(0,string.length-1);
        input.value=string;
        console.log(3);

    }

    else{
        
            string+=e.target.innerHTML;
            input.value=string;
        console.log(4);


    }
})
})