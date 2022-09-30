function validacion(){
    //e.preventDefault();
    let val = false;
    //let caja = document.getElementById("caja_ncontrol").value;
    /*console.log(document.getElementById("caja_ncontrol"))
    if(document.getElementById("caja_ncontrol").value){
        val = true;
        alert("no vacio")
    }
    else{
        alert("vacio")
    }*/

    let edad = document.getElementById("select_edad").selectedIndex;
    if(edad == 0){
        val = true;
    }

    let check = document.getElementsByClassName("ck");

    for(let i = 0; i < check.length; i++){
        if(check[i].checked){
            alert("seleccionado "+ check[i].value)
        }
    }
}


function validacionNumero(componente){

    let dato = componente.value;

    if(isNaN(dato)){
        document.getElementById("caja_ncontrol").value = "";
        return "";
    }
}

let ck = document.getElementById("check_cp");
let oc = document.getElementById("oculta");

ck.addEventListener("click", function(){
    if(oc.style.display == "none"){
        oc.style.display = "block";
    }
    else{
        oc.style.display = "none";
    }
})