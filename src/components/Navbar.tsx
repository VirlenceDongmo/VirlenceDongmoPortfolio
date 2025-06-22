import { Container } from "lucide-react"


const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between item-center p-4">
            <a href="#" className="flex items-center font bold text-3xl md:text-xl">
                <Container className="mr-2" />
                Virlence
                <span className="text-accent">Dev</span>
            </a>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost">
                        Accueil
                    </a>
                </li>

                <li>
                    <a href="#A propos" className="btn btn-sm btn-ghost">
                        A propos
                    </a>
                </li>

                <li>
                    <a href="#Mes expériences" className="btn btn-sm btn-ghost">
                        Mes expériences
                    </a>
                </li>

                <li>
                    <a href="#Mes projets" className="btn btn-sm btn-ghost">
                        Mes projets
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar