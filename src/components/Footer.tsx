import { Container, Github, Linkedin, Twitter, Youtube } from "lucide-react"



const Footer = () => {
  return (

    <footer className="footer footer-horizontal footer-center p-10">
      <aside>
        <p className="font-bold">
          Virlence
          <span className="text-accent">Dev</span>
        </p>

        <p>Copyright © {new Date().getFullYear()} - Tous les droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-current"/>
          </a>

          <a href="https://github.com/VirlenceDongmo/" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-current"/>
          </a>

        </div>
      </nav>
    </footer>
  )
}

export default Footer








