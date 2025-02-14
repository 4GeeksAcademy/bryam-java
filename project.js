window.onload = function (){
    let who = ["El perro ", "El Vecino ", "El Gato ", "Ramiro ", "Hermenejildo "];
    let action = ["comio ", "perdio ", "archivo ", "descubrio ", "olvido "];
    let what = ["el pan ", "mi celular ", "mi computadora ", "un poco de salsa "];
    let where = ["sobre mi tumba ", "abajo de mi almhoada ", "en el techo ", "en la Calle "];
    let when = ["hace rato ", "ayer ", "por la tarde ", "por la noche" ];
    
    let rndm1= Math.floor(Math.random() * who.length);
    let rndm2= Math.floor(Math.random() * action.length);
    let rndm3= Math.floor(Math.random() * what.length);
    let rndm4= Math.floor(Math.random() * where.length);
    let rndm5= Math.floor(Math.random() * when.length);
    
    document.querySelector("#excuse").innerHTML = who[rndm1] + action[rndm2] + what[rndm3] + where[rndm4] + when[rndm5];
    };
    