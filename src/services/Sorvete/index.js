export default function sorvetinho(gram){
    let p = 3.50;
    if(gram>=1000){
        p=3;
    }

    return (gram*p)/100;
}