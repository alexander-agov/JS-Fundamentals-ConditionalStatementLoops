function pyramid(wAndL, incH) {
    let marble = 0;
    let stone = 0;
    let totalH = 0;
    let stoneSum = 0;
    let marbleSum = 0;
    let lapisSum = 0
    let goldSum = 0;
    let count = 1;
    for (let i = wAndL; i >= 1; i -= 2) {
        totalH += incH;
        let area = i ** 2;
        if (i <= 2) {
            goldSum = area * incH;
        } else {
            stone = (i - 2) ** 2 * incH;
            stoneSum += stone;
            if (count % 5 == 0) {
                lapisSum += (area * incH - stone);
            } else {
                marble = (area * incH - stone);
                marbleSum += marble;
            }
        }
        count++;
    }
    console.log(`Stone required: ${Math.ceil(stoneSum)}`);
    console.log(`Marble required: ${Math.ceil(marbleSum)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisSum)}`);
    console.log(`Gold required: ${Math.ceil(goldSum)}`);
    console.log(`Final pyramid height: ${Math.floor(totalH)}`);
}
// pyramid(11, 1);
pyramid(11, 0.75);
// pyramid(12,    1    );
// pyramid(23,    0.5    );

