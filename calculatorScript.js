function clicked(id) {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    if(id==1){
        document.getElementById("out").value ="Result Addition: "+(a+b);
    }
    if(id==2){
        document.getElementById("out").value ="Result Subtraction: "+(a-b);
    }
    if(id==3){
        document.getElementById("out").value ="Result Multiplication: "+(a*b);
    }
    if(id==4){
        document.getElementById("out").value ="Result Division: "+(a/b);
    }
}