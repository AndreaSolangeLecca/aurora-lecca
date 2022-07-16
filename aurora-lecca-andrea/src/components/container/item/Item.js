let productos =[
    {id: '1' , categoria: 'Anillos', name: 'Anillo Iris', precio: '10.000' , foto: './img/anillo01.jpg'} ,
    {id: '2' , categoria: 'Anillos', name: 'Anillo Loira', precio: '8.000' , foto: './img/anillo02.jpg'} ,
    {id: '3' , categoria: 'Anillos', name: 'Anillo White', precio: '9.500' , foto: './img/anillo03.jpg'} ,
    {id: '4' , categoria: 'Anillos', name: 'Anillo Diamond', precio: '10.800' , foto: './img/anillo04.jpg'} ,
    {id: '5' , categoria: 'Anillos', name: 'Anillo Donna', precio: '8.000' , foto: './img/anillo05.jpg'} ,
    {id: '6' , categoria: 'Anillos', name: 'Anillo Amour', precio: '9.000' , foto: './img/anillo06.jpg'} ,
    {id: '7' , categoria: 'Anillos', name: 'Anillo Atenea', precio: '7.000' , foto: './img/anillo07.jpg'} ,
    {id: '8' , categoria: 'Anillos', name: 'Anillo Rose', precio: '8.000' , foto: './img/anillo08.jpg'} ,
    {id: '9' , categoria: 'Anillos', name: 'Anillo Ayra', precio: '10.500' , foto: './img/anillo09.jpg'} ,
    {id: '10' , categoria: 'Collares', name: 'Collar Ana', precio: '8.000' , foto: './img/collar01.jpg'} ,
    {id: '11' , categoria: 'Collares', name: 'Collar Cuore', precio: '8.000' , foto: './img/collar02.jpg'} ,
    {id: '12' , categoria: 'Collares', name: 'Collar Bloom', precio: '8.500' , foto: './img/collar03.jpg'} ,
    {id: '13' , categoria: 'Collares', name: 'Collar Diana', precio: '12.800' , foto: './img/collar04.jpg'} ,
    {id: '14' , categoria: 'Collares', name: 'Collar Sun', precio: '8.000' , foto: './img/collar05.jpg'} ,
    {id: '15' , categoria: 'Collares', name: 'Collar Diamond', precio: '13.000' , foto: './img/collar06.jpg'} ,
    {id: '16' , categoria: 'Aros', name: 'Aros Gold', precio: '6.800' , foto: './img/aros01.jpg'} ,
    {id: '17' , categoria: 'Aros', name: 'Aros Diamond', precio: '5.000' , foto: './img/aros02.jpg'} ,
    {id: '18' , categoria: 'Aros', name: 'Aros Amour', precio: '5.600' , foto: './img/aros03.jpg'} ,
];

export const Catalogo = new Promise((resolve, reject) =>{
    let condition = true
    if(condition) {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    } else {
        reject('400 not found')
    }
})

