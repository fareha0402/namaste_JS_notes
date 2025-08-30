function fetchData(callback){
    setTimeout(()=>{
        callback(null,'Data received')
    },1000)
}


function fetchDataPromise() {

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Data Resolved')
            // reject('Error occurred')
        },1000)
    })
}


 getData = async() =>{
    try{
        const res = await fetchDataPromise()
        // const data = await res.json()
        console.log(res)
    }
    catch(err){
        console.log('Error' ,err)
    }
}

getData()