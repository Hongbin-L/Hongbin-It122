let usedCars = [
    {brand : "Jeep", year : 2019, color : "White", price: "$69,999"},
    {brand : "Ford", year : 2017, color : "Red", price: "$19,999"},
    {brand : "Chevrolet", year : 2019, color : "Yellow", price: "$19,894"},
    {brand : "Kia", year : 2020, color : "Gray", price: "$23,720"},
    {brand : "Toyota", year : 2018, color : "Blue", price: "$13,005"},
    {brand : "Honda", year : 2018, color : "Black", price:"$25,999"}
];

const getAll = () => {
    return usedCars;
};


const getItem = (brand) => {
    return usedCars.find((usedCar) => {
        return usedCar.brand == brand;
    });
};

const deleteItem = (brand) => {
    const oldLength = usedCars.length;
    usedCars = usedCars.filter((usedCar) => {
        return usedCar.brand !== brand;
    });
    return {deleted: oldLength !== usedCars.length, total: usedCars.length };
};

    
const addItem = (addusedCar) => {
    const oldLength = usedCars.length;
    let found = getItem(addusedCar.brand);
    if (!found) {
        usedCars.push(addusedCar);
    }
        return {added: oldLength !== usedCars.length, total: usedCars.length };
    };
    

export { getAll, getItem, addItem, deleteItem }