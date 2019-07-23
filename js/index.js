// DATA RESOURCES
let dataResorce = [
    {
        heading: "What is Green Energy?",
        bodyText: "One of the popular, clean and affordable clean energy is solar Energy which is easy to afford for people of even regular households.It seves as a fantastic alternative for the conventional energy sources like fossil fuels and water.The research and developement in the same area has led to fall in the prices. ",
        imgUrl: "././images/pic_1.jpg"
    },
    {
        heading: "What all are Green Energy Sources?",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "././images/pic_3.jpg"
    },
    {
        heading: "How to make green energy Affordable?",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "././images/pic_4.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 

$content.innerHTML = `<div><h3>${dataResorce[0].heading}</h3></div>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;

// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
    
    // read the text inside the button
    let btnText = clickedBtn.innerText;
    
    // print the text of the clicked button
    //console.log(btnText);
    
    if (btnText === "Introduction") {
        $content.innerHTML = `<div><h3>${dataResorce[0].heading}</h3></div>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "Sources") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3> 
                              <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3> 
                              <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }
    
}



//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}