let getTitle = new Promise((resolve, reject) =>{

    // return the title of the current page

    let isTitleReceived = true;

    if(isTitleReceived){

        resolve('print the title');
    }
    else {
        reject("Title not printed");

    }

});

    getTitle.then(function(resolveText){
        console.log(resolveText);
    }).catch((rejectText)=>{
        console.log(rejectText);

    });




