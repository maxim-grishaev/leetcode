function flippingBits(n: number): number {
    const str = n.toString(2).replace('-', '').padStart(32, '0');
    const arr = str.split('').slice(str.length-32);
    return arr.reduce((memo, n, i) => {
        return memo + (n==='0' ? Math.pow(2,31-i):0);
    }, 0)
}

export {flippingBits}
