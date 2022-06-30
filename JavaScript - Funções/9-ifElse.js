function numeroPositivo(num){
   const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }    
    return true;
}

console.log(numeroPositivo(2));

console.log(numeroPositivo(-9));