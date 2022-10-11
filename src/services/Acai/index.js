export default function acai(qtdp, qtdm ,qtdg ,desc){
    const p = 13.50;
    const m = 15;
    const g = 17.50;
    const desconto =(((qtdp*p)+(qtdm*m)+(qtdg*g))*desc)/100;
    const total=(qtdp*p)+(qtdm*m)+(qtdg*g);
    let resp=`O total à pagar é de R$${total-desconto}`;

    if(qtdp <0 || (qtdm <0 || qtdg <0) ){
        resp=`Quantidades invalidas`;
    }
    return resp;
        
};

