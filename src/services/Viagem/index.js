export default function viajar(cap, cons, dist) {
    const x=dist/cons;
    const y=x/cap;
    return Math.ceil(y);
}