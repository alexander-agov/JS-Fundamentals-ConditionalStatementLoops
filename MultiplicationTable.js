function multiplication(num) {
    let times = 1;
    do {
        let product = num * times;
        console.log(`${num} X ${times} = ${product}`);
        times++;
    } while (times <= 10);
}
multiplication(5);
multiplication(2);