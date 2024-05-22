function bitcoin(x) {
    let digUp = 0;
    let day1 = x.length;
    let count = 0;
    let day = 0;
    let money = 0;
    let times = 1;
    let dayArr = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i <= day1 - 1; i++) {
        if (times % 3 == 0) {
            digUp = x[i] * 67.51 * 0.7;
        }
        else {
            digUp = x[i] * 67.51;
        }
        money += digUp;
        if (money >= 11949.16) {
            count += (Math.trunc(money / 11949.16));
            money -= (Math.trunc(money / 11949.16)) * 11949.16;
            day = i + 1;
            if (day < dayArr) {
                dayArr = day;
            };
        }
        times++;
    }
    if (count > 0) {
        console.log(`Bought bitcoins: ${count}`);
        console.log(`Day of the first purchased bitcoin: ${dayArr}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${count}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }
}
bitcoin([100, 200, 300]);
// bitcoin([50, 100]);
// bitcoin([3124.15, 504.212, 2511.124]);