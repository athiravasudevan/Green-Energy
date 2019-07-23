// DATA RESOURCES
let dataResorce = [
    {
        heading: "What is Green Energy?",
        bodyText: "One of the popular, clean and affordable clean energy is solar Energy which is easy to afford for people of even regular households.It seves as a fantastic alternative for the conventional energy sources like fossil fuels and water.The research and developement in the same area has led to fall in the prices. ",
        imgUrl: "././images/pic_1.jpg"
    },
    {
        heading: "What all are Green Energy Sources?",
        bodyText: "There are lot os ways we can produce green energy from.Most forms of green energies depend in one way or another on sunlight. The major Source of renewable energy is Solar.It relies on the nuclear fusion power from the core of the Sun. This could be collected and converted in various ways. The range is from solar water heating with solar collectors or attic cooling with solar attic fans for domestic use to the complex technologies of direct conversion of sunlight to electrical energy using mirrors and boilers or photovoltaic cells. Unfortunately these are currently insufficient to fully power our modern society. And then We have Wind power. Here electricity is produced from movement coused by wind We have lot of sources like Hydro electric energy,Biomass,Fuel cells,Geo thermal power Etc..",
        imgUrl: "././images/pic_3.jpg"
    },
    {
        heading: "How to make green energy Affordable?",
        bodyText: "Energy is Really Expensive Now days.with the right kind of infrastructure spending, we can make them Affordable.group commissioned by Colombia, Ethiopia, Indonesia, Norway, South Korea, Sweden and the U.K. to study economic growth and climate change. The group says that investing in infrastructure could help bring down the cost of clean energy by as much as 30 percent. Renewable energy is cheaper already at many many countries in the world.But the upfront spendings to set up a producing station is expensive. There are lot of organizations are working on it..",
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