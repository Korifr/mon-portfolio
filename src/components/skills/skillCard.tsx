import { useState } from "react";
import classes from "./skillCard.module.css";

interface SkillCardProps {
  title: string;
  iconSrc: string;
  knowledge: string[]; // liste de compétences ou sous-domaines
}

export function SkillCard({ title, iconSrc, knowledge }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={classes.skillCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <header className={classes.header}>
        <img src={iconSrc} alt={`${title} logo`} className={classes.icon} />
      </header>

      <section className={classes.body + (hovered ? ` ${classes.expanded}` : "")}>
        <h2 className={classes.title}>{title}</h2>
        <ul className={classes.knowledge}>
          {knowledge.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
