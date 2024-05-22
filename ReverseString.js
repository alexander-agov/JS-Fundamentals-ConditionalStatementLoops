function reverse (x){
    let rev = "";
    for (let i = x.length-1; i >= 0; i--){
        rev += x[i];
    }
    console.log(rev);
}
reverse("Hello");
reverse("SoftUni");
reverse("1234");