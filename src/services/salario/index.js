export default function Salario(sal,bon,desc){
    const bonus=(sal*bon)/100;
    const t=sal + bonus;
    return t-desc;
}