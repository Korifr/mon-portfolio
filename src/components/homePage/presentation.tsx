import { FaGithub } from 'react-icons/fa';

export function Presentation() {
    return (
    <div className="sm:absolute sm:bottom-36 sm:left-40 sm:max-w-xl  text-white">
        {/* Réseaux sociaux */}
        <div className="sm:flex sm:justify-start sm:gap-4 sm:mb-1 sm:text-3xl flex justify-center gap-2 w-full mb-2 text-2xl">
            <a href="https://github.com/Korifr">
                <FaGithub className="cursor-pointer hover:text-gray-300" />
            </a>
        </div>

        {/* Texte de présentation */}
        <p className="md:text-2xl sm:leading-relaxed sm:text-lg text-sm leading-tight text-justify ">
            Je suis développeur web diplômé, actuellement à la recherche d'une alternance en 
            Concepteur et Développeur d'Applications. Passionné par le développement, je conçois 
            des expériences digitales sur mesure : des sites performants aux interfaces intuitives. <br />
            Vous pouvez retrouver mes compétences et projets sur cette page. N'hésitez pas à me contacter 
            pour collaborer et transformer vos idées en réalité web.
        </p>
    </div>
    );
}
