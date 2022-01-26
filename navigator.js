
let state ="none" 

let youtubeLink = "https://youtu.be/l64IhSndXuA";
let githubLink = "https://github.com/Johngoss725/Mixamo-To-Godot";
let AGE = "https://Averagegodotenjoyer.com"

const panel = document.querySelector(".panel");

const workObj=[{
    heading:"APiAdventures",
    subHeading: "Open weather API forecast built with node.js",
    image:"",
    subImage:"",
    par1:`I created this app with node.js using a server to make the calls to the Open Weather API. 
    I deployed it to heroku to have an easy place to display it. The API  key is stored in the enviroment provided by heroku.`,
    par2:"",
    links:["https://gossweather.herokuapp.com/"]


},{
    heading:"Godot Game Engine Projects",
    subHeading:"Python Animation Scripts",
    image:"./Myself.jpeg",
    subImage:"./Mixamo.png",
    par1:`
    I create video games with the Godot Game engine. 
    The models are created in Blender.
    I use Adobe's Mixamo to rig the blender models with animations for use in Godot. 
    
    
    There was a large amount of formatting required to get the mixamo models to behave correctly in the game engine.
    I created this script to easily ready the models for use with the engine. I made the script available for use on
    my GitHub.     
    `,
    par2:"",
    links:["https://www.youtube.com/embed/l64IhSndXuA", "https://github.com/Johngoss725"]
},{
    heading:"this shouldnt be showing",
    subHeading:"AverageGodotEnjoyer.com",
    image:"",
    subImage:"./AGE.png",
    par1:`
    I wanted to work with tools like c-panel and understand more about internet architecture. I recentley created 
    Averagegodotenjoyer.com as a way to further those goals and create more resources for the Godot community .       
    `,
    par2:"",
    links:["https://averagegodotenjoyer.com"]

},{
    heading:"Godot Game Engine Projects",
    subHeading:"Python Scene Parser for Godot",
    image:"",
    subImage:"./Spooky.jpg",
    par1:`
    I created a set of scripts to automate creating 2D sprites from 3D models. Additionally I created a Godot 
    .tscn file parser to build scenes externallly from the engine. This way I can automatically rig similar 
    assets in an effiecient manner. 
    
    I demonstrate the process here on my youtube channle. All the scripts I use in the video can be viewed 
    on my GitHub as well`,
    par2:"",
    links:["https://www.youtube.com/embed/SdKzZf0xyK0?start=330"]


}
];
function flyAround(){
    clearScreen()
    let container = document.createElement("div");
    container.classList.add("flying");

    let outerHolder = document.createElement("div");
    outerHolder.classList.add("outerHolder");
    container.append(outerHolder);

    let upButton = document.createElement("button");
    upButton.classList.add("upButton");
    outerHolder.append(upButton);

    let upIcon = document.createElement("i");
    upIcon.classList.add("fas", "fa-arrow-up");
    upButton.append(upIcon);
    upButton.addEventListener("click",()=> window.flight_diry=1)

    let innerHolder =document.createElement("div");
    innerHolder.classList.add("innerHolder");
    outerHolder.append(innerHolder);

    let leftButton = document.createElement("button");
    leftButton.classList.add("leftButton");
    innerHolder.append(leftButton);
    
    let brakeButton = document.createElement("button");
    brakeButton.classList.add("brakeButton");
    innerHolder.append(brakeButton)
    brakeButton.addEventListener("click",()=> {
        window.flight_diry = 0;
        window.flight_dirx = 0;
        })
    
    let brakeIcon = document.createElement("i");
    brakeButton.classList.add("far", "fa-hand-paper"); 
    brakeButton.append(brakeIcon)

    let leftIcon = document.createElement("i");
    leftIcon.classList.add("fas" ,"fa-arrow-left");
    leftButton.append(leftIcon);
    leftButton.addEventListener("click",()=> window.flight_dirx=-1)
    
    let rightButton = document.createElement("button");
    rightButton.classList.add("rightButton");
    innerHolder.append(rightButton);

    let rightIcon = document.createElement("i");
    rightIcon.classList.add("fas", "fa-arrow-right");
    rightButton.append(rightIcon);
    rightButton.addEventListener("click",()=> window.flight_dirx=1)
    

    let bottomButton = document.createElement("button");
    bottomButton.classList.add("bottomButton");
    outerHolder.append(bottomButton);

    let downIcon = document.createElement("i");
    downIcon.classList.add("fas", "fa-arrow-down");
    bottomButton.append(downIcon);
    bottomButton.addEventListener("click",()=> window.flight_diry=-1)

    panel.append(container);
}


function clearScreen(){
    inFlight=false;
    if (panel.childElementCount>0){
        panel.lastChild.remove();
    }

    
}

function openAboutMe(){
    clearScreen()
    if (state !== "aboutMe"){
        state = "aboutMe"
        let container = document.createElement('div');
        let picHolder = document.createElement('div');
       
        let pic = document.createElement('img');
        let p = document.createElement('p');
        p.innerText = `
        Im a software development student from Virginia. Ive always had a deep interest in technology and coding. 
        Ive operated machinery for most of my career and Ive always enjoyed the overlap between software and 
        hardware that makes the job enjoyable.
        
        My experience with coding is mostly self taught through online resources however I am currently enrolled 
        in Purdue University Global for an Associates Degree in Information Technology. 

        I come from a manufactutring backround. I was a sheet Metal Mechanic as well as a Machine Operator.  
        `
    
        picHolder.append(pic)
        container.append(picHolder)
        container.append(p)
        container.classList.add('aboutMe')
        
        pic.classList.add("selfie")
        pic.src = "./Myself.jpeg"
        panel.append(container);
    }
}
// deactivet the buttons after we press them or this wont work
function openWork(){
    clearScreen()
     
    if(state !== "work"){
        state = "work";
        let container=document.createElement("div");
        container.classList.add("work")
        // just a github link and our top bar 
        let frame = document.createElement("div");
        frame.classList.add("workFrame")
        //frame.append(img);
        container.append(frame);


        for(let i=0; i < workObj.length; i++){  

            //Project Header
            let subHeader = document.createElement("h4");
            subHeader.innerText = workObj[i]["subHeading"];
            subHeader.classList.add("workSubHeader")
            
            //Project Paragraph
            let p = document.createElement("p");
            p.innerText = workObj[i]["par1"];
            p.classList.add("workPar");
            let linkHolder = document.createElement("div");
            linkHolder.classList.add("workLinkHolder");


            //Creating our links dynamically for eah list item
            if(workObj[i]["links"].length){
                let useF = document.createElement("iframe");
                useF.classList.add("vids");
                useF.src = workObj[i]["links"][0];
                linkHolder.append(useF);
            }
            container.append(subHeader);
           // item.append(subImage);
            container.append(p);
            container.append(linkHolder);
            if (i==0){
                let gLink = document.createElement("a");
                gLink.classList.add("test")
                gLink.innerText="Heroku Hosted Weather App"
                gLink.href="https://gossweather.herokuapp.com/";
                container.append(gLink)
            }
            
            if(i===1){
                let gLink = document.createElement("a");
                gLink.classList.add("test")
                gLink.innerText="Mixamo Github Script"
                gLink.href="https://github.com/Johngoss725/Mixamo-To-Godot";
                container.append(gLink)
            } 
            if(i===2){
                let gLink = document.createElement("a");
                gLink.classList.add("test")
                gLink.innerText="Averagegodotenjoyer.com"
                gLink.href="https://averagegodotenjoyer.com";
                container.append(gLink)
            }
            if(i===3){
                let gLink = document.createElement("a");
                gLink.classList.add("test")
                gLink.innerText="Parser Script / Spooky Castle"
                gLink.href="https://github.com/Johngoss725/SpookyCastleProject";
                container.append(gLink)
            }      
        }
        panel.append(container);
    }
}


function openSkills(){
    clearScreen()
    if(state !== "skills"){
        state = "skills"
        let Skills = [
            "javaScript",
            "node.js",
            "HTML",
            "CSS",
            "Python",
            "Game Development",
            "3D Modeling / Blender",
            "SQL",
            "API Usage",
            "Industrial Equipment Operation"
        ];

        let container = document.createElement("div");
        container.classList.add("skills");
        let header = document.createElement("h3");
        header.classList.add("skillHeader");
        header.innerText = "Skills";
        let skillList = document.createElement("ul");
        skillList.classList.add("skillList");

        for(let i = 0; i < Skills.length; i++){
            let skillItem = document.createElement("li");
            let skillTitle = document.createElement("h4");
            skillTitle.innerText = Skills[i];
            skillItem.append(skillTitle);
            skillList.append(skillItem);

        }
        container.append(header);
        container.append(skillList);

        panel.append(container);
        


    }
}
