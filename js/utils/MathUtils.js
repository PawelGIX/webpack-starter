    
    
export function mapRange(x, a, b, c, d){
    return (x - a) * (d - c) / (b - a) + c;
} 

/**
 * linear interpolation
 * @param {int} a 
 * @param {int} b 
 * @param {int} n 
 */
export function ler(a, b, n){
    return (1 - n) * a + n * b;

} 