const arrayItems = items => {
    let item;
    let counter = 0;

    for (let i of items) {
        if (counter === 0) {
            item = i;
        }
        counter += i === item ? 1 : -1;
    }

    counter = 0;
    for (let i of items) {
        if (i === item) {
            counter++;
        }
    }

    if (counter > items.length / 2) {
        return item;
    } else {
        return "There is no item that's repeating";
    }
};
console.log(arrayItems([5, 3, 5, 3, 2, 5, 6, 3, 4, 4]));
console.log(arrayItems([2, 12, 12, 3, 2, 4, 12, 12, 12, 12]));
