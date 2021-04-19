const usedCars = [
    {brand : "Jeep", year : 2019, color : "White", price: "$69,999"},
    {brand : "Ford", year : 2017, color : "Black", price: "$19,999"},
    {brand : "Chevrolet", year : 2019, color : "White", price: "$19,894"},
    {brand : "Kia", year : 2020, color : "Gray", price: "$23,720"},
    {brand : "Toyota", year : 2018, color : "White", price: "$13,005"}
];

const getAll = () => {
    return usedCars;
};


const getItem = (brand) => {
    return usedCars.find((usedCar) => {
        return usedCar.brand == brand;
    });
};


export { getAll, getItem }