let h;

function alturadelIsociles(){
    const aa = document.getElementById("InputA");
    const bb = document.getElementById("InputB");
    const cc = document.getElementById("InputC");
    const a = aa.value;
    const b = bb.value;
    const c = cc.value;
    

    if(a & b === c){
        console.log("Esto es un Equilatero");
        h = Math.abs((Math.sqrt((a * a) - ((b * b)/4))));
        console.log(h);
        console.log(a);
        console.log(b);
        console.log(c);
    }
        else if(a === b){
            console.log("tienes un Isociles");
            h = Math.abs((Math.sqrt((a * a) - ((c * c)/4))));
            console.log(h);
            console.log(a);
            console.log(b);
            console.log(c);
        }
            else if(a === c){
                console.log("tienes un Isociles");
                h = Math.abs((Math.sqrt((a * a) - ((b * b)/4))));
                console.log(h);
                console.log(a);
                console.log(b);
                console.log(c);
            }
            else if(b === c){
                console.log("tienes un Isociles");
                h = Math.abs((Math.sqrt((b * b) - ((a * a)/4))));
                console.log(h);
                console.log(a);
                console.log(b);
                console.log(c);
            }
                else if(Math.abs((Math.pow(a, 2)) - (Math.pow(b, 2))) === (c * c)){
                    console.log("Esto es un triangulo Escaleno");
                    if(a < b & a < c){
                        h = a;
                        if(b < a & b < c){
                            h = b;
                            if(c < a & c < b){
                                h = c;
                                console.log(h);
                                console.log(a);
                                console.log(b);
                                console.log(c);
                            }
                        }

                    }
                }
                else if(Math.abs((Math.pow(a, 2)) - (Math.pow(c, 2))) === (b * b)){
                    console.log("Esto es un triangulo Escaleno");
                    if(a < b & a < c){
                        h = a;
                        if(b < a & b < c){
                            h = b;
                            if(c < a & c < b){
                                h = c;
                                console.log(h);
                                console.log(a);
                                console.log(b);
                                console.log(c);
                            }
                        }

                    }
                }
                else if(Math.abs((Math.pow(b, 2)) - (Math.pow(c, 2))) === (a * a)){
                    console.log("Esto es un triangulo Escaleno");
                    if(a < b & a < c){
                        h = a;
                        if(b < a & b < c){
                            h = b;
                            if(c < a & c < b){
                                h = c;
                                console.log(h);
                                console.log(a);
                                console.log(b);
                                console.log(c);
                            }
                        }

                    }
                }
                    else{
                        console.log("Esto es un triangulo irregular");
                        if(a < b & a < c){
                            h = a;
                            if(b < a & b < c){
                                h = b;
                                if(c < a & c < b){
                                    h = c;
                                    console.log(h);
                                    console.log(a);
                                    console.log(b);
                                    console.log(c);
                                }
                            }
    
                        }
                    }
    return h;
}