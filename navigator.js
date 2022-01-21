
let state ="none" 

let youtubeLink = "https://youtu.be/l64IhSndXuA";
let githubLink = "https://github.com/Johngoss725/Mixamo-To-Godot";
let AGE = "https://Averagegodotenjoyer.com"

const panel = document.querySelector(".panel");

const workObj=[{
    heading:"Godot Game Engine Projects",
    subHeading:"Python Animation Scripts",
    image:"./Myself.jpeg",
    subImage:"./Mixamo.png",
    par1:`
    I create video games with the Godot Game engine. 
    I create the models for the games in Blender.
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
    I wanted to work with tools like c-panel and understand more about internet architecture. I created 
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


function clearScreen(){
    if (panel.children.length>1) {
    console.log(panel.lastChild);
    panel.lastChild.remove();
    }
    else{
        console.log("nothing");
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
    let internalState = "gdot";
    //we will create4 state for each of our projects 
    if(state !== "work"){
        state="work";
        
        let container = document.createElement("div");
        container.classList.add("work");
        let list = document.createElement("ul");
        list.classList.add("workList")
        let header = document.createElement("h3");
        
        if (internalState==="godot"){
            header.classList.add("workHeader")
            header.innerText = workObj[0]["heading"]
        }
        else{
            header.classList.add("workHeader")
            header.innerText = workObj[1]["heading"]
        }

        let useL = document.createElement("a");
        useL.classList.add("workLink");
        useL.href = "https://github.com/Johngoss725";
        useL.innerText=" My GitHub"
       // linkHolder.append(useL); 

        let img = document.createElement("img");
        img.src = workObj[0]["image"];
        img.classList.add("selfie")
    
        
        let item = document.createElement("li");
        item.classList.add("workItem")

        let frame = document.createElement("div");
        frame.classList.add("workFrame")
        
        //frame.append(img);
        frame.append(useL);
        item.append(frame);

        for(let i=0; i < workObj.length; i++){  

            //Smaller Header
            let subHeader = document.createElement("h4");
            subHeader.innerText = workObj[i]["subHeading"];
          //  let subImage = document.createElement("img");
          //  subImage.classList.add("workSubImg");
          //  subImage.src=workObj[i]["subImage"];
            
            subHeader.classList.add("workSubHeader")
            let p = document.createElement("p");
            p.innerText = workObj[i]["par1"];
            p.classList.add("workPar");
            let linkHolder = document.createElement("div");
            linkHolder.classList.add("workLinkHolder");

            //Creating our links dynamically for eah list item
            if(workObj[i]["links"].length){
            
                for(let j = 0; j < workObj[i]["links"].length; j++){
                    if (workObj[i]["links"][j]==="https://github.com/Johngoss725"){
                        let useL = document.createElement("a");
                        useL.classList.add("workLink");
                        useL.href = workObj[i]["links"][j];
                        useL.innerText="GitHub"
                       // linkHolder.append(useL);                    
                    }
                    else{
                        let useF = document.createElement("iframe");
                        useF.classList.add("vids");
                        useF.src = workObj[i]["links"][j];
                        linkHolder.append(useF);
                    }
                    


                }


            }
            
            item.append(subHeader);
           // item.append(subImage);
            item.append(p);
            item.append(linkHolder);
    
            
            
            
        }
        list.append(item);
        container.append(list);

        panel.append(container);
    }

}


function openSkills(){
    clearScreen()
    if(state !== "skills"){
        state = "skills"
        let Skills = [
            "javaScript",
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
