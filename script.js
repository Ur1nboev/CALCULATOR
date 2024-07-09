function ekranaYaz(val){
    document.getElementById("input").innerHTML  += val;
}

function hammasiniOchr(){
    document.getElementById("input").innerHTML  = "";
}
function birsiniOchr(){
    let qiymat = document.getElementById("input").innerHTML,
    yangQiymat = "";
    // for (let i = 0; i < qiymat.length - 1; i++ ) {
    //     yangQiymat += qiymat[i];
        
    // }
    yangQiymat = qiymat.slice(0,qiymat.length-1)
    document.getElementById("input").innerHTML  = yangQiymat;

}

function hisobla(){
    let qiymat = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = eval(qiymat);
}