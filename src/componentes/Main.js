import React from "react";

import profile1 from "../img/Profile_1.jpg";
import profile2 from "../img/Profile_2.png";
import videoBackground from "../img/backgroundvideo2.mp4";
import videoWebm from "../img/backgroundvideo2.webm";
import photoframe1 from "../img/temporal_1.jpg";
import photoframe2 from "../img/temporal_2.jpg";
import photoframe3 from "../img/temporal_3.jpg";
import Videos from "./Videos";

class Main extends React.Component {
  render() {
    return (
      <div>
        <section class="section-about">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">One Core to rule them all</h2>
            <p class="paragraph">
              Gracias a la disponibilidad de modulos independientes
              prediseñados, <br />
              construir un satelite sera como decidir de que sabor quieres tu
              pizza"{" "}
            </p>
          </div>
          <div class="row">
            <div class="col-2-of-3">
              <h3 class="heading-tertiary u-margin-bottom-small">
                Menos Costos
              </h3>
              <p class="paragraph">
                Gran parte del costo de construccion de un satelite corresponde
                a los largos tiempos de desarrollo y el constante sorpote de un
                equipo de especialistas, lo que involucra grandes costos y suele
                desalentar estas iniciativas. Gracias a los modulos
                preconstruidos de giskard podras despreocuparte por el proceso y
                el arduo proceso de investigacion.
              </p>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Mejores tiempos
              </h3>
              <p class="paragraph">
                Una vez construido un satelite es necesario superar una etapa
                ardua y larga de pruebas y certificaciones antes de ser puesto
                en orbita, si, mas dinero. Giskard orfrece un acompañamiento
                completo durante el proceso de diseño, simulacion de escenarios,
                manufcatura y certificacion de tus satelite basado en los
                modulos prediseñados.
              </p>
              <h3 class="heading-tertiary u-margin-bottom-small">Mas Facil</h3>
              <p class="paragraph">
                Mucha de la tecnologia satelital suele requerir una serie de
                funciones basicas, como comunicacion UHF, Computadora de vuelo,
                Gestion de Bateria, Camaras, Sensores, etc, Por ello estamos
                trabajando en brindarte cada vez mejores modulos que se adapten
                a tus proyectos espaciales.
              </p>
              <br />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Ya estas listo para llegar al infinito y mas alla.
              </h3>
            </div>
            <div class="col-1-of-3"> 
            <Videos/>
            </div>
          </div>
        </section>
        <section class="section-about">
          <div class="row">
            <div class="col-1-of-2">
              <div class="composition">
                <img
                  srcset={photoframe1}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  class="composition__photo composition__photo--p1"
                  src={photoframe1}
                />

                <img
                  srcset={photoframe2}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  class="composition__photo composition__photo--p2"
                  src={photoframe2}
                />

                <img
                  srcset={photoframe3}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  class="composition__photo composition__photo--p3"
                  src={photoframe3}
                />
              </div>
              <p class="paragraph">espacio</p>
            </div>
            <div class="col-1-of-2">
              <h3 class="heading-tertiary u-margin-bottom-small">
                Te acompañamos durante todo el proceso
              </h3>
              <p class="paragraph">
                Al adquirir un modulo Giskard estaras asesorado por un panel de
                expertos, que te permitiran ajustar el diseño a tus necesidades,
                asesorarte en el proceso de ensamblaje y certificacion, nuestro
                objetivo es que puedas enfocarte solo en lo mas importante, los
                resultados.
              </p>
            </div>
          </div>
        </section>

        <section class="section-features">
          <div class="row">
            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-world"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">Diseño</h3>
                <p class="feature-box__text">
                  Los modulos de giskard son personalizables y nuestro equipo te
                  ayudara a elegir el mas adecuado.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-compass"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Simulacion
                </h3>
                <p class="feature-box__text">
                  Es importante prepararnos para cualquier eventualidad, por lo
                  que simulamos los escenarios y poder prepararnos.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-map"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Manufacture
                </h3>
                <p class="feature-box__text">
                  Gracias a la naturaleza modular y reutilizable, la fabricacion
                  puede realizarse en periodos muy cortos.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-map"></i>
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Test & Certificacion
                </h3>
                <p class="feature-box__text">
                  Te acompañamos en el proceso de certificacion y pruebas para
                  que no tengas que preocuparte por eso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-stories">
          <div class="bg-video">
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              class="bg-video__content"
            >
              <source src={videoBackground} type="video/mov" />
              <source src={videoWebm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary u-margin-top-big ">
              Que dicen los Expertos?
            </h2>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={profile1} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">Jakob Van Zyl</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  A effetive solution
                </h3>
                <p>
                  "Cubesat technology creates a vehicle for people to do science
                  at a much lower investment to the taxpayer." Jakob Van Zyl,
                  director of the Solar System Exploration Directorate at NASA's
                  Jet Propulsion Laboratory.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={profile2} alt="Person on a tour" class="story__img" />
                <figcaption class="story__caption">John Baker</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  "There's big potential in these small packages,"
                </h3>
                <p>
                  "CubeSats — part of a larger group of spacecraft called
                  SmallSats — are a new platform for space exploration
                  affordable to more than just government agencies." John Baker,
                  the MarCO program manager at Jet Propulsion Lab.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
