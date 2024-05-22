function login(x) {
    let username = x[0];
    let index = 1;
    let password = x[index];
    let newOne = "";
    let attempt = 1;
    for (let i = username.length - 1; i >= 0; i--) {
        newOne += username[i];
    }
    while (attempt < 4) {
        if (password === newOne) {
            console.log(`User ${username} logged in.`);
            return;
        }
        else {
            console.log("Incorrect password. Try again.");
            attempt++;
            index++;
            password = x[index];
        }
    }
    if (attempt == 4 && password === newOne) {
        console.log(`User ${username} logged in.`);
        return;
    }
    else {
        console.log(`User ${username} blocked!`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);