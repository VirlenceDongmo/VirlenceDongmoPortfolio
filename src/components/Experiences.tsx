import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgDjango from "../assets/techno/django.png";
import imgHTML from "../assets/techno/html.png";
import imgJS from "../assets/techno/js.png";
import imgPYTHON from "../assets/techno/python.png";
import imgREACT from "../assets/techno/react.png";
import imgTAILWIND from "../assets/techno/tailwind.png";


const skills = [
    {id:1, name:"HTML", image:imgHTML},
    {id:2, name:"CSS", image:imgCSS},
    {id:3, name:"JavaScript", image:imgJS},
    {id:4, name:"Réact", image:imgREACT},
    {id:5, name:"Python", image:imgPYTHON},
    {id:6, name:"Tailwind CSS", image:imgTAILWIND},
    {id:8, name:"Django", image:imgDjango}
]



const Experiences = () => {
  return (
    <div id="Mes expériences">
        
        <Title title = "Expériences" />
        
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center mt-4 md:mt-0">
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

        </div>

    </div>
  )
}

export default Experiences