export default function febre(temp) {
    let resp = '';

    if (temp >= 41) {
        resp='Hipertermia'
    }
    else if(temp<41 && temp >=39.6){
        resp='Febre Alta'
    }
    else if(temp<39.6 && temp >=37.6){
        resp='Febre'
    }
    else if(temp<37.6 && temp >=36){
        resp='Normal'
    }
    else if(temp<36){
        resp='Hipotermia'
    }
    
    return resp;
}