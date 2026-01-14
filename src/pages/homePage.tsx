import bgImage from "../assets/img/home.png";
import { Header } from "../components/homePage/header";
import { NameTitle } from "../components/homePage/nameTitle";
import { MenuNav } from "../components/homePage/menuNav";
import { Presentation } from "../components/homePage/presentation";

interface HomePageProps {
  onSectionChange: (section: "home" | "projets" | "compétences" | "contact") => void;
}

export function HomePage({onSectionChange}: HomePageProps) {
  return (
    <div
      className="relative w-screen h-screen text-white flex flex-col items-center px-4 py-8 sm:flex sm:flex-col sm:items-center sm:justify-between sm:px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <NameTitle firstName="JULIEN" lastName="GUILLEMOT" />
      
      <div className="flex flex-col items-center justify-center gap-10 w-full p-2 ">
        <Presentation />
        <MenuNav onSectionChange={onSectionChange}/>
      </div>
    </div>
  );
}
