import { InfiniteSkillsSlider } from "../components/skills/infiniteSkillsSlider";
import { SkillCard } from "../components/skills/skillCard";
import { SkillCardMobile } from "../components/skills/skillCardMobile";

interface SkillsPageProps {
    onSectionChange: (section: "home") => void;
}

export function SkillsPage({onSectionChange}: SkillsPageProps) {


    return (
    <>
        <div className="w-full h-screen" style={{
            backgroundColor: "black",
            backgroundSize: "cover",
            }}>

            <div className="absolute top-4 left-4 sm:top-4 sm:left-4">
                <button
                    onClick={() => onSectionChange("home")}
                    className="px-4 py-2 bg-black text-white border-2 border-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                >
                    Accueil
                </button>
            </div>

            
            <InfiniteSkillsSlider/>

            {(window.innerWidth >= 640) ? (
                <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                    <SkillCard
                    title="Frontend"
                    iconSrc="/assets/img/front-end.png"
                    knowledge={["HTML5/CSS3", "JavaScript/TypeScript", "React", "Vue.js"]}
                    />
                    <SkillCard
                    title="Backend"
                    iconSrc="/assets/img/back-end.png"
                    knowledge={["Java", "Springboot", "Node.js", "SQL"]}
                    />
                    <SkillCard
                    title="Database"
                    iconSrc="/assets/img/database.png"
                    knowledge={["MongoDB", "MySQL", "PostgreSQL"]}
                    />
                </div>
            ) : (
                <div className="flex flex-col h-screen w-full justify-center items-center">
                    <SkillCardMobile
                    title="Frontend"
                    iconSrc="/assets/img/front-end.png"
                    knowledge={["HTML5/CSS3", "JavaScript/TypeScript", "React", "Vue.js"]}
                    />
                    <SkillCardMobile
                    title="Backend"
                    iconSrc="/assets/img/back-end.png"
                    knowledge={["Java", "Springboot", "Node.js", "SQL"]}
                    />
                    <SkillCardMobile
                    title="Database"
                    iconSrc="/assets/img/database.png"
                    knowledge={["MongoDB", "MySQL", "PostgreSQL"]}
                    />
                </div>
            )}
            

            <div className="flex justify-center mt-10">

                <a
                href="/assets/cv.pdf" // chemin vers ton PDF dans public
                download
                className="relative inline-block px-6 py-3 font-semibold text-white rounded-lg overflow-hidden group border-2 border-white
                            transition-all duration-300"
                >
                {/* Background animé */}
                <span className="absolute inset-0 w-full h-full bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

                {/* Texte */}
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Télécharger CV
                </span>
                </a>

            </div>

        </div>
    </>
    );
}