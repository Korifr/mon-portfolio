import classes from "./menuNav.module.css";

interface MenuNavProps {
    onSectionChange: (section: "home" | "projets" | "compétences" | "contact") => void;
}

export function MenuNav({onSectionChange}: MenuNavProps) {
    return (
        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-6 max-sm:text-lg sm:absolute sm:bottom-44 sm:right-40 sm:flex sm:flex-col sm:items-end sm:gap-10 sm:text-[30px]">
        {[
            { label: "Projets", section: "projets" },
            { label: "Compétences", section: "compétences" },
            { label: "Contact Me", section: "contact" },
        ].map((item, i) => (
            <button
            key={i}
            onClick={(e) => {
                e.preventDefault();
                onSectionChange(item.section as "home" | "projets" | "compétences" | "contact");
            }}
            className={`relative group text-right ${classes.link}`}
            >
            {item.label}
            {/* Trait animé */}
            </button>
        ))}
        </div>
    );
    }
