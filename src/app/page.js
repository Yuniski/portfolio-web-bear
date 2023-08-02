import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import deved from "../../public/foto-bg.png";
import code from "../../public/code.png";
import qa from "../../public/qa.png";
import consulting from "../../public/consulting.png";
import web0 from "../../public/web0.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                  href="/Yuniski-Duran-CV.pdf"
                  download
                >
                  Resumen CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Yuniski Durán
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer and QA</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            Welcome to my corner on the web! I'm Yuniski, a passionate frontend developer and a quality. My mission is to breathe life into ideas through captivating interfaces and to ensure that every detail functions seamlessly.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/yuniskiduran/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Yuniski" target="_blank">
              <AiFillGithub />
            </a>
            <a href="mailto:yuniski24@gmail.com" target="_blank">
              <FaEnvelope />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} className="cover" alt="Photo of Yuniski" />
          </div>

          <div className=" flex justify-center">
            <a
              className=" bg-gradient-to-r  from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md mt-10 mb-10"
              href="/Yuniski-Duran-CV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
            Throughout my professional journey, I've blended creativity with technical skills to create visually appealing and highly functional websites. Whether it's transforming concepts into code or rigorously testing to ensure excellence, my focus is on exceeding expectations and delivering solutions that stand out.
            </p>
          </div>
          <div className=" flex lg:flex gap-10">
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                width={100}
                height={100}
                alt="# code image"
                className="inline justify-center"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">
                Fueled by a problem-solving passion and solid programming logic, I've mastered diverse technologies to transform ideas into reality. My adaptable skills make new languages a breeze, while my core strengths lie in these well-versed technologies.
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <ul className="text-gray-800 py-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Tailwind</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={qa}
                width={100}
                height={100}
                alt="# code image"
                className="inline justify-center"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">QA</h3>
              <p className="py-2">
                Detail, passion, and scalability define my Quality Control philosophy. My meticulous nature ensures thorough examination of every aspect, pursuing excellence in all project facets. I'm fervently dedicated to delivering high-quality functionality
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <ul className="text-gray-800 py-1">
                <li>Exploratory Testing</li>
                <li>Test Case Scenarios</li>
                <li>Bugs Report</li>
                <li>Automation (Selenium)</li>
                <li>Performance Testing (JMeter)</li>
              </ul>
            </div>
            <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="# code image"
                className="inline justify-center"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Service</h3>
              <p className="py-2">
                My approach extends beyond technical expertise, encompassing a robust array of soft skills. Accessibility is the cornerstone, fostering fluid and open interactions. Proficiency in problem-solving bolsters my commitment to delivering effective solutions.
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <ul className="text-gray-800 py-1">
                <li>Good Communication</li>
                <li>Accesible</li>
                <li>Teamwork</li>
                <li>Good Vibes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portafolio</h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            <div className="basis-1/3 flex-1">
              <a
                href="https://todo-app-react-tailwind-bear.netlify.app"
                target="_blank"
              >
                <Image
                  src={web0}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="todoapp"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://challenge-card-blue.netlify.app"
                target="_blank"
              >
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="card"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://qr-component-niki-bear.netlify.app"
                target="_blank"
              >
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="qr component"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://rick-and-morty-niki-bear.netlify.app"
                target="_blank"
              >
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="rating component"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://rating-component-interactive-bear.netlify.app"
                target="_blank"
              >
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="versus rick and morty"
              />
              </a>
            </div>

          </div>

        </section>

        <footer className="flex justify-center text-center mb-10">
          <div className=" justify-center">
            <span className="text-xl">Yuniski</span>

            <div className="text-3xl flex justify-center gap-16 py-3 text-gray-600 mt-5 mb-5">
              <a
                href="https://www.linkedin.com/in/yuniskiduran/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Yuniski" target="_blank">
                <AiFillGithub />
              </a>
              <a href="mailto:yuniski24@gmail.com" target="_blank">
                <FaEnvelope />
              </a>
            </div>

            <span className=" text-xs ">Code with ❤ for Niki 🐻 </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
