import Title from "./Title"
import img1 from "../assets/projects/1.png"
import img2 from "../assets/projects/2.png"
import img3 from "../assets/projects/3.png"
import img4 from "../assets/projects/4.png"
import img5 from "../assets/projects/5.png"
import img6 from "../assets/projects/6.png"
import { Github, Video } from "lucide-react"

const projects = [
    {
        id: 1,
        titre: "CollabTask : Gestionnaire des ressources d'un projet.",
        description: "imporimport imgCSS from ../assets/techno/css.png;import imgCSS from ../assets/techno/css.png;",
        technologies: ['React js', 'Django Rest Framework', 'Tailwindcss',],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        titre: "CollabTask : Gestionnaire des ressources d'un projet.",
        description: "imporimport imgCSS from ../assets/techno/css.png;import imgCSS from ../assets/techno/css.png;",
        technologies: ['React js', 'Django Rest Framework', 'Tailwindcss',],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        titre: "CollabTask : Gestionnaire des ressources d'un projet.",
        description: "imporimport imgCSS from ../assets/techno/css.png;import imgCSS from ../assets/techno/css.png;",
        technologies: ['React js', 'Django Rest Framework', 'Tailwindcss',],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        titre: "CollabTask : Gestionnaire des ressources d'un projet.",
        description: "imporimport imgCSS from ../assets/techno/css.png;import imgCSS from ../assets/techno/css.png;",
        technologies: ['React js', 'Django Rest Framework', 'Tailwindcss',],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        titre: "CollabTask : Gestionnaire des ressources d'un projet.",
        description: "import imgCSS from ../assets/techno/css.png;import imgCSS from ../assets/techno/css.png;impor",
        technologies: ['React js', 'Django Rest Framework', 'Tailwindcss',],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        titre: "CollabTask : Gestionnaire des ressources d'un projet.",
        description: "import imgCSS from ../assets/techno/css.png;import imgCSS from ../assets/techno/css.png;imp",
        technologies: ['React js', 'Django Rest Framework', 'Tailwindcss',],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },

]



const Projects = () => {
    return (
        <div className="mt-20" id="Mes projets">

            <Title title="Mes projets" />

            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (

                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">

                        <img 
                            src={project.image} 
                            alt={project.titre} 
                            className="w-full rounded-xl h-56 object-cover"
                        />

                        <div>
                            <h1 className="my-2 font-bold">
                                {project.titre}
                            </h1>

                            <p className="text-sm"> 
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4"/>
                            </a>

                            <a className="btn btn-neutral w-1/3" href={project.repoLink}>
                                
                                <Github className="w-4"/>
                            </a>
                        </div>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default Projects