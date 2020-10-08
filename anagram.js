


function makeAnagram(a, b) {
    let result = [];
    for(let i=0; i< a.length; i++) {
        if(b.includes(a[i])) {
            result.push(a[i]);
            let commonIndexA = a.split('').findIndex(e => e== a[i]);
            let commonIndexB = b.split('').findIndex(e => e== a[i]);
            a.split('').splice(commonIndexA, 1);
            b.split('').splice(commonIndexB, 1);
        }
    }
    let diff_a = a.length - result.length;
    let diff_b = b.length - result.length;
    return diff_a + diff_b;
}
