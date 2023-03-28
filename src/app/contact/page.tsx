import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "../components/ContactForm";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/YoonCode" },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/sangjin-yoon/",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2>Contact Me</h2>
      <p>yooncode.dev@gmail.com</p>
      <ul>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
