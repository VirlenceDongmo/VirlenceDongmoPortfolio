import Title from "./Title";
import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/3.png";
import img3 from "../assets/projects/2.png";
import video1 from "../assets/projects/demo/collabtask.mp4"
import video2 from "../assets/projects/demo/frimeur.mp4"
import video3 from "../assets/projects/demo/note.mp4"

import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    titre: "CollabTask : Gestionnaire des ressources d'un projet.",
    description:
      "Elle intègre la gestion des collaborateurs, des notifications, des taches d'un projet et un chatbot intelligent.",
    technologies: [
      "React js",
      "Django Rest Framework",
      "Tailwindcss",
      "Rabbitmq",
      "Docker",
      "Nginx",
      "DaisyUI",
      'Git'
    ],
    demoLink: video1,
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    titre: "Frimeur-Shopping : Un site de e-commerce.",
    description:
      "Il intègre la gestion des ressources du site, du panier du client, la gestion des historiques des transactions des clients, un mode de paiement par paypal et un système de notification.",
    technologies: ["Django", "JavaScript", "HTML 5", "CSS 3", "Bootstrap", 'Git'],
    demoLink: video2,
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    titre: "Un bloc note.",
    description:
      "Il intègre un système d'authentification par Jason Web Token, la possibilité de modifier ou de supprimer une note.",
    technologies: ["React js", "Django Rest Framework", "Tailwindcss", 'Git'],
    demoLink: video3,
    repoLink: "#",
    image: img3,
  },
];

const Projects = () => {
  const openModal = (id: number) => {
    const modal = document.getElementById(`modal_${id}`) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="mt-20" id="Mes projets">
      <Title title="Mes projets" />

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            {/* Miniature de la vidéo avec image de preview */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.titre}
                className="w-full rounded-xl h-56 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
                <button
                  onClick={() => openModal(project.id)}
                  className="btn btn-accent btn-circle"
                >
                  <Video className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="mt-3">
              <h1 className="my-2 font-bold">{project.titre}</h1>
              <p className="text-sm">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                className="btn btn-accent w-2/3"
                onClick={() => openModal(project.id)}
              >
                Démo
                <Video className="w-4 ml-2" />
              </button>

              <a className="btn btn-neutral w-1/3" href={project.repoLink}>
                <Github className="w-4" />
              </a>
            </div>

            {/* Modal pour la vidéo */}
            <dialog id={`modal_${project.id}`} className="modal">
              <div className="modal-box max-w-5xl w-full">
                <h3 className="font-bold text-lg mb-4">{project.titre}</h3>
                <video
                  src={project.demoLink}
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                >
                  Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Fermer</button>
                  </form>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>Fermer</button>
              </form>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;