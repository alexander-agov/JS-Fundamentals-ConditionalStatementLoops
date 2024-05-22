function sort(x, y, z) {
    let arr = [x, y, z];
    arr.sort();
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
sort(2,    1,    3    );
sort(-2,    1,    3    );
sort(0,    0,    2    );