/*Задание 1*/
function pickPropArray(s, p)
{
    let arr = [];
    for (let el of s)
    {
        if (el.hasOwnProperty(p))
        {
            arr.push(el[p]);
        }
    }
    return arr;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name');
console.log(result);

/*Задание 2*/
function createCounter()
{
    let count=0;
    return function ()
    {
        count++;
        console.log(count);
    }
}
const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

/*Задание 3*/
function spinWords(a)
{
    let mas = a.split(" ");
    for(let i = 0; i < mas.length; i++)
    {
        if(mas[i].length >= 5)
        {
            mas[i] = mas[i].split("").reverse().join("");
        }
    }
    return mas.join(" ");
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test