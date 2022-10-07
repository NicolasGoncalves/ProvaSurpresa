export default function signo(dia,mes){
    let resp="";
    let m=mes.toLowerCase();
    if((dia<=0 || dia>=31 ) || (m== NaN) ){
        resp="Data invalida";
    }

    else if( (dia>=23 && m=='setembro' ) || (dia<=22 && m=='outubro') ){
        resp="Sim";
    }
    else{
        resp="Não";
    }

    return resp;
  
}