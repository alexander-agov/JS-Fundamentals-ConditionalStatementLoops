function sum(n) {
    let result = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        result = 2 * i - 1
        console.log(result);
        sum += result
    }
    console.log(`Sum: ${sum}`);
}
sum(5);
sum(3)