function print(numOne, numTwo) {
    let sum = 0;
    let line = "";
    for (let i = numOne; i <= numTwo; i++) {
        line += i + " ";
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
print(5, 10);
print(0, 26);
print(50, 60);