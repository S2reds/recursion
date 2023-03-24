function fib(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        if (i < 2) arr.push(i)
        else {
            let two = arr[arr.length-2]
            let one = arr[arr.length-1]
            arr.push(one+two)
        }
    }
    return arr
}
console.log(fib(5))
