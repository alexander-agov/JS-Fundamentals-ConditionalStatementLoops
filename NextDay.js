function nextDay(x, y, z) {
    let currentDate = new Date(x, y - 1, z);
    currentDate.setDate(currentDate.getDate() + 1);
    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1;
    let nextDay = currentDate.getDate();
    let formattedDate = `${nextYear}-${parseFloat(nextMonth)}-${parseFloat(nextDay)}`;
    console.log(formattedDate);
}
nextDay(2016,9,30);
nextDay(2020,3,24);


