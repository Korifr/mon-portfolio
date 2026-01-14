import { motion } from "framer-motion";
import htmlLogo from "../../assets/img/html.png";
import cssLogo from "../../assets/img/css.png";
import jsLogo from "../../assets/img/js.png";
import tsLogo from "../../assets/img/ts.png";
import reactLogo from "../../assets/img/react.png";
import vueJsLogo from "../../assets/img/vue-js.png";
import javaLogo from "../../assets/img/java.png";
import springbootLogo from "../../assets/img/springboot.png";
import postgreSQLLogo from "../../assets/img/postgre-sql.png";
import classes from "./infiniteSkillsSlider.module.css";

export function InfiniteSkillsSlider() {
const skills = [htmlLogo, cssLogo, jsLogo, tsLogo, reactLogo, vueJsLogo, javaLogo, springbootLogo, postgreSQLLogo];

return (
    <div className={classes.sliderContainer}>
        <div className={classes.slider}>
        {/* Fondu transparent gauche et droite */}
        <div className={`${classes.fade} ${classes.fadeLeft}`} />
        <div className={`${classes.fade} ${classes.fadeRight}`} />

        {/* Bande animée : deux tracks identiques pour un loop fluide */}
        <div className={classes.trackWrapper}>
            {[0, 1].map((n) => (
            <motion.div
                key={n}
                className={classes.track}
                animate={{ x: ["0%", "-100%"] }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
                {skills.map((logo, i) => (
                <motion.img
                    key={i}
                    src={logo}
                    alt="skill"
                    className={classes.logo}
                />
                ))}
            </motion.div>
            ))}
        </div>
        </div>
    </div>
);
}
