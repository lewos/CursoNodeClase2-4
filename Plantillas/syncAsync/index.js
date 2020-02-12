
const retardoSync = () =>{for(let i=0;i<2e9;i++);}
const retardoAsyncCallBack = cb => setTimeout(cb,2000)
// no se pueden pasar parametros
const retardoAsyncPromise = () => new Promise(resolve=> setTimeout(resolve,2000))

async function retardo(){
    // retardoSync()
    // console.log('Retardo OK')

    // retardoAsyncCallBack(() =>{
    //     console.log('Retardo OK')
    // })

    // retardoAsyncPromise()
    // .then(()=>{
    //     console.log('Retardo 1 OK') 
    //     return retardoAsyncPromise()
    // })
    // .then(()=>{
    //     console.log('Retardo 2 OK')
    //     return retardoAsyncPromise()
    // })
    // .then(()=>{
    //     console.log('Retardo 3 OK')
    //     return retardoAsyncPromise()
    // })
    // // solo cuando tenes un error (resolve,reject)
    // .catch(()=>{})


    // para async await, la funcion debe ser async (async function retardo())
    // o const retardo = async() => {...}
    await retardoAsyncPromise()
    console.log('Retardo OK')

}

console.log('Inicio')
retardo()
console.log('Fin')