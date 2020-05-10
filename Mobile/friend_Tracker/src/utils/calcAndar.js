const calcAndar = (altitude1, altitude2) => {

    let altura = altitude1 - altitude2;

    if(altitude1 === altitude2){
        return "Mesmo Andar"
    }else if(altura === -3){
        return "1 Andar Acima"
    }else if(altura === -6){
        return "2 Andares Acima"
    }else if(altura < -6){
        return ">3 Andares Acima"
    }else if(altura === 3){
        return "1 Andar Abaixo"
    }else if(altura === 6){
        return "2 Andares Abaixo"
    }else if(altura > 6){
        return ">3 Andares Abaixo"
    }


}

export default calcAndar;