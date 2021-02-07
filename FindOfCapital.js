function capital(capitals){
   var returnArr = [];

    for (var i = 0; i < capitals.length; i++) {

         var str = 'The capital of '
             + (capitals[i].state || capitals[i].country)
             + ' is '
             + capitals[i].capital;

        returnArr.push(str);
    }

    return returnArr;
}

let capitals = {state: 'Russia',
                capital: 'Moscow'};

alert(capital(capitals));
