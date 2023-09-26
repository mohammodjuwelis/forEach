const fruits = ['mango', 'apple', 'orange', 'banana', 'lemon'];
fruits.forEach((name, index, arr) =>  {
    const fruitName = name;
    const fruitIndex = index;
    const fruitsArr = arr;
    console.log(fruitIndex, fruitName, fruitsArr);
});

fruits.forEach((name, index) => console.log(name, index));
fruits.forEach(name => console.log(name));

