const user = async ()=> {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
 console.log(data);
} catch (error) {
    console.log('E:', error);
}
}


user();

fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    return data.name;
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("E:",err);
})

