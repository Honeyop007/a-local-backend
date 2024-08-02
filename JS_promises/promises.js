
const promiseone = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Promise One:");
        console.log("ASYNC task is fulfiled");
        res()
    }, 1000)

});

promiseone.then(() => {
    console.log("Promise complete");
})



const promisetwo = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Promise two:");
        res({ id: "0394", email: "l1f22bsse0394", Name: "Abdul Hanan" })
    }, 1000)

});


//  This first function receive the full object we pass it the at lower then function the upper then pass it or return it the name of Object whuch is info.name so thats why the lower function catch the name of user instead of full object ...
promisetwo.then((Info) => {
    console.log(Info);
    return Info.Name
}).then((Name) => {
    console.log(Name);
})



const promisethree = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            console.log("Promise three:");
            res({ id: "0399", Name: "Abdul Rehman" })
        } else {
            console.log("Promise three:");
            rej('ERROR : info not found ');
        }
    }, 2000)
})

promisethree
    .then((Info) => {
        console.log(Info);
        return Info.Name
    })
    .then((Name) => {
        console.log(Name);
    })
    .catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("Your promise Run's : Either Resolved or rejected"); //Finally is default it runs always...
    })

const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            console.log("Promise Four:");

            res({ id: "404", Name: "Java Script" })
        } else {
            console.log("Promise Four:");

            rej('ERROR : JS not found ');
        }
    }, 2000)
})
// async wait for the function to execture we call in it and use await keyword with te following called function and store it into a variable and this variable conatin or receive the response val or obj we pass in it and we can use operation by using that response variable created in async await function it throw no error because it doesnt go further without execution
const consume = async () => {
    const response = await promiseFour
    console.log(response);
}
consume();



const promiseFive = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            console.log("Promise Five:");

            res({ id: "105", Name: "Python" })
        } else {
            console.log("Promise Five:");

            rej('ERROR : PY not found ');
        }
    }, 2000)
})
// async await doesnt throw error thats why we use try catch out inorder to deal with errors 
const consume1 = async () => {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consume1();