import { useState } from "react";
import contactImage from "../assets/img/Design sans titre.png";
import emailjs from "emailjs-com";
import bgImage from "../assets/img/home.png";
import classes from "./contact.module.css";

interface ContactPageProps {
    onSectionChange: (section: "home") => void;
}

export function ContactPage({onSectionChange}: ContactPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" |"success" | "error">("idle");

  const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAIL_JS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAIL_JS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    console.log(name, email, objet, message);
    e.preventDefault();

    if (!name || !email || !objet || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          name,
          email,
          objet,
          message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setObjet("");
        setMessage("");
      }
      )
      .catch(() => {
        setStatus("error");
      });

  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    
      {/* Partie gauche : formulaire */}
      <div className="w-screen h-screen sm:w-1/2 text-black flex flex-col justify-center items-start p-8 border-r-2 border-white" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="absolute top-4 left-4 sm:top-4 sm:left-4">
            <button
                onClick={() => onSectionChange("home")}
                className="px-4 py-2 bg-black text-white border-2 border-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
                Accueil
            </button>
        </div>
        <div className="flex items-center justify-center w-full mb-6">
            <h1 className={`text-4xl font-bold mb-6 ${classes.title}`}  >Contactez-moi</h1>
        </div>



        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">

          {status === "success" && (
            <p className="bg-green-600 text-black p-2 mb-4 rounded w-10/12">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p className="bg-red-600 text-black p-2 mb-4 rounded w-10/12">
              Veuillez remplir tous les champs.
            </p>
          )}
          <input
            type="text"
            placeholder="Votre nom"
            className="p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white w-10/12"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Objet du message"
            className="p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white w-10/12"
            value={objet}
            onChange={(e) => setObjet(e.target.value)}
          />

          <input
            type="email"
            placeholder="Votre email"
            className="p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white w-10/12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Votre message"
            className="p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white w-10/12"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-white text-black hover:bg-gray-200 transition-colors p-3 rounded font-semibold w-10/12"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Partie droite : image (masquée sur mobile) */}
      <div
        className="hidden md:block md:w-1/2 h-64 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
    </div>
  );
}
