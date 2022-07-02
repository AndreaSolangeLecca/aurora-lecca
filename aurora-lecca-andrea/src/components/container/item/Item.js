let productos =[
    {id: '1' , categoria: 'anillos', name: 'Anillo Iris', precio: '10.000' , foto: './img/anillo01.jpg'} ,
    {id: '2' , categoria: 'anillos', name: 'Anillo Loira', precio: '8.000' , foto: './img/anillo02.jpg'} ,
    {id: '3' , categoria: 'anillos', name: 'Anillo White', precio: '9.500' , foto: './img/anillo03.jpg'} ,
    {id: '4' , categoria: 'anillos', name: 'Anillo Diamond', precio: '10.800' , foto: './img/anillo04.jpg'} ,
    {id: '5' , categoria: 'anillos', name: 'Anillo Donna', precio: '8.000' , foto: './img/anillo05.jpg'} ,
    {id: '6' , categoria: 'anillos', name: 'Anillo Amour', precio: '9.000' , foto: './img/anillo06.jpg'} ,
    {id: '7' , categoria: 'anillos', name: 'Anillo Atenea', precio: '7.000' , foto: './img/anillo07.jpg'} ,
    {id: '8' , categoria: 'anillos', name: 'Anillo Rose', precio: '8.000' , foto: './img/anillo08.jpg'} ,
    {id: '9' , categoria: 'anillos', name: 'Anillo Ayra', precio: '10.500' , foto: './img/anillo09.jpg'} ,
];

export const Item = new Promise((resolve, reject) =>{
    let condition = true
    if(condition) {
        setTimeout(() =>{
            resolve(productos)
        }, 4000)
    } else {
        reject('400 not found')
    }
})

