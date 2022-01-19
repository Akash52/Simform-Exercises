//What is synchronus JavaScript ?

//Synchronus JS is one in which the code
//is executed line by line and their tasks are
//completed instantly , i.e. there is no time delay
//in the completion of the tasks for those lines code.

//Example Synchronous 

// const functionOne =()=> {
//     console.log('Function One');
//     functionTwo();
// }

// const functionTwo =()=> {
//     console.log('Function Two');
//     functionThree();
// }

// const functionThree =()=> {
//     console.log('Function Three');
// }
// functionOne();


//Example ASynchronous 


const functionOne =()=> {
    console.log('Function One');
    functionTwo();
}

const functionTwo =()=> {
    console.log('Function Two');
    setTimeout(()=>{
        functionThree();
    },2000);

}

const functionThree =()=> {
    console.log('Function Three');
}
functionOne();

//Asynchronous JS is one in which
//Some lines of code take time to run.
//These lines of code are executed in background
//While the javaScript engine keeps executing
//other lines of code.
//When the time delay is over, the lines of code
//are executed.

//Callback Functions

// const fetchData =(userName,callback)=>{
//     setTimeout(()=>{
//         callback({userName});
//     },2000);
// }

// const user = fetchData('Michel',(user)=>{   
//     console.log(user.userName);
// });


//More Callback Functions

// const fetchData =(userName,callback)=>{
//     setTimeout(()=>{
//         callback({userName});
//     },2000);
// }

// const fetchPhotos = (userName,callback)=>{
//     setTimeout(()=>{
//         console.log(`Fetching Photos ${userName}`);
//         callback(['Photo1','Photo2','Photo3']);
//     },2000);
// }

// const fetchVideos = (userName,callback)=>{
//     setTimeout(()=>{
//         console.log(`Fetching Videos ${userName}`);
//         callback(['Video1','Video2','Video3']);
//     },2000);
// }

//callback hell

// fetchData('Michel',(user)=>{   
//     console.log(user.userName);

//     fetchPhotos(user.userName,(photos)=>{
//         console.log(`Your Photos ${photos}`);

//         fetchVideos(user.userName,(videos)=>{
//             console.log(`Your Videos ${videos}`);
//         })
//     });

// });

//Promises

//They are used to handle asynchronous code
//the successfully fetched data, or the error



//Fetch User

// const fetchUser =(userName)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({userName});
//         },2000);
//     })
// }

// Fetch Photos

// const fetchPhotos = (photos)=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(`Fetching Photos ${photos} `);
//         resolve(['Photo1','Photo2','Photo3']);
//     },2000);
//  })
// }

// Fetch Videos

// const fetchVideos = (videos)=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(`Fetching Videos `);
//         resolve(['Video1','Video2','Video3']);
//     },2000);
// })
// }

// fetchUser('Michel')
// .then((user)=>fetchPhotos(user.userName))
// .then((photos)=>fetchVideos(photos))
// .then((videos)=>console.log(`Your Videos ${videos}`))
// .catch((error)=>console.log(error));


//Async FUNCTIONS RETURN PROMISES !!!

// const displayDatas = async ()=>{
//     const user = await fetchUser('Michel');
//     const photos = await fetchPhotos(user.userName);
//     const videos = await fetchVideos(photos);
//     console.log(`Your Videos ${videos}`);
// }

// displayDatas()









   













