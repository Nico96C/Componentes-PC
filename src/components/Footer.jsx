import { Link } from "react-router-dom";
import GithubIcon from "../svg/github";
import InstagramIcon from "../svg/instagram";
import LinkedInIcon from "../svg/linkedin";

export function Footer() {
    return(
        <footer className="Web-End">
        <div className="Web-End-Containers">
          <section className="Web-End-Categorys">
            <h4> CATEGORIAS DETACADAS </h4>
            <nav>
              <ul className="List-tag">
                <li>
                  <Link href="/videocards">Placas de Video</Link>
                </li>
                <li>
                  <Link href="/procesors">Procesadores</Link>
                </li>
                <li>
                  <Link href="/motherboard">Motherboards</Link>
                </li>
                <li>
                  <Link href="/peripherals">Perifericos</Link>
                </li>
              </ul>
            </nav>
          </section>
          <div className="Web-End-SocialMedia">
            <section className="Mail">
              <h4>CONTACTAME</h4>
              <p>nicolas.cuello96@hotmail.com</p>
            </section>
            <section className="Redes">
              <h4>REDES Y REPOSITORIO</h4>
              <div className="Redes-link">
                <a
                  href="https://www.instagram.com/megabits96/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolás-andres-cuello"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <a href="https://www.Github.com/Nico96C" target="_blank">
                  <GithubIcon />
                </a>
              </div>
            </section>
          </div>
        </div>
      </footer>
    )
}