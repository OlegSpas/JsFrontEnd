let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');



function quarriv(){
    const quarresult = +a.value * +a.value + 2 * +a.value * +b.value + +b.value * b.value;

    console.log("result: ", quarresult)
}

function dod( ){
    const dodresult = +a.value + +b.value + +c.value;

    console.log('result: ', dodresult)
}

function vidn(){
    const vidnresult = +a.value - +b.value - +c.value;

    console.log('Result: ', vidnresult)
}

function mnozh(){
    const mnresult = +a.value * +b.value * +c.value;

    console.log('result ', mnresult)
}

function dil() {
    const dilresult = +a.value / +b.value / +c.value

console.log('result ', dilresult)
}

