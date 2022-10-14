export default function orçamento(ganho,gasto) {
    const x=(gasto*100)/ganho;

    if(gasto>ganho){
        return 'Orçamento comprometido! Hora de rever os seus gastos!';
    }

    else if(x <= 100 && x >= 81){
        return 'Cuidado! O seu orçamento pode ficar comprometido!';
    }

    else if(x <= 80 && x >= 51){
        return 'Atenção, melhor conter os gastos!';
    }

    else if(x <= 50 && x >= 21){
        return 'Muito bem, seus gastos não ultrapassam metade dos ganhos!';
    }

    else if(x <= 20 && x >= 0){
        return 'Parabéns, está gerenciando bem seu orçamento!';
    }
    else if(x < 0){
        return 'Você ganhou dinheiro ????'
    }
   
}