import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgDjango from "../assets/techno/django.png";
import imgHTML from "../assets/techno/html.png";
import imgJS from "../assets/techno/js.png";
import imgPYTHON from "../assets/techno/python.png";
import imgREACT from "../assets/techno/react.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png"


const skills = [
    {id:1, name:"HTML", image:imgHTML},
    {id:2, name:"CSS", image:imgCSS},
    {id:3, name:"JavaScript", image:imgJS},
    {id:4, name:"Réact", image:imgREACT},
    {id:5, name:"Python", image:imgPYTHON},
    {id:6, name:"Tailwind CSS", image:imgTAILWIND},
    {id:7, name:"TypeScript", image:imgTYPE},
    {id:8, name:"Django", image:imgDjango}
]


const experiences = [

    {
        id:1, 
        role:"software engeneer", 
        company:"Google",
        period:"sept 2343 - present",
        description:[
            "uyugyugfyuefyugefghfevhvef",
            "uyugyugfyuefyugefghfevhvef",
        ],
        image:google,
    },

    {
        id:2, 
        role:"software engeneer", 
        company:"meta",
        period:"sept 2343 - present",
        description:[
            "uyugyugfyuefyugefghfevhvef",
            "uyugyugfyuefyugefghfevhvef",
        ],
        image:meta,
    },

    {
        id:3, 
        role:"software engeneer", 
        company:"amazone",
        period:"sept 2343 - present",
        description:[
            "uyugyugfyuefyugefghfevhvef",
            "uyugyugfyuefyugefghfevhvef",
        ],
        image:amazon,
    },
]



const Experiences = () => {
  return (
    <div>
        
        <Title title = "Expériences" />
        
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                {skills.map((skill) => (

                    <div key = {skill.id} className="flex justify-center items-center flex-col">

                        <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">

                            <img src={skill.image} alt={skill.name} 
                            className="object-cover rounded-full h-full w-full" />

                        </div>

                        <span className="mt-2 text-sm">{skill.name}</span>

                    </div>

                ))}
            </div>

            <div className="md:ml-4 flex flex-col space-y-4">

                {experiences.map((experience) => (

                    <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">

                        <div className="flex items-center">
                            <img src={experience.image} alt={experience.company} 
                            className="object-cover h-10 w-10 rounded-full h-full w-full"/>

                            <div className="ml-4">
                                <h1 className="text-xl text-accent font-bold">
                                    {experience.role}, {experience.company}
                                </h1>
                                <span className="text-sm">{experience.period}</span>
                            </div>

                        </div>

                        <ul className="list-disc ml-16 mt-2">

                            {experience.description.map((desc, index) => (
                                <li key={index}>
                                    {desc}
                                </li>
                            ))}

                        </ul>

                    </div>
                ))}

            </div>

        </div>

    </div>
  )
}

export default Experiences