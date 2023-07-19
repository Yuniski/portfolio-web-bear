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
    <main className="bg-white px-10 md:px-20 lg:px-40" >
      <section className=" min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Bear Programing</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                className="bg-gradient-to-r  from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resumen
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            nesciunt libero quam necessitatibus incidunt placeat nulla pariatur,
            officiis optio eaque?
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
          <FaEnvelope />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} className="cover" alt="Photo of Yuniski" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Skills</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            perspiciatis deleniti ipsa non, a corrupti quod. Amet est voluptas
            quia nobis facere sit molestiae modi, non qui ullam a maiores! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Hic praesentium
            animi, odio saepe libero magni ullam perspiciatis culpa obcaecati?
            Animi fugiat similique esse nostrum laboriosam facere ut voluptas
            quae eum?
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              src={code}
              width={100}
              height={100}
              alt="# code image"
              className="inline justify-center"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Coding for you</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ullam doloremque mollitia recusandae! Quasi, recusandae quam? Ea
              unde quisquam alias asperiores, doloremque nisi dolor libero nihil
              ratione. Harum, placeat pariatur!
            </p>
            <h4 className="py-4 text-teal-600">Lenguajes y Herramientas</h4>
            <ul className="text-gray-800 py-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              src={qa}
              width={100}
              height={100}
              alt="# code image"
              className="inline justify-center"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Coding for you</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ullam doloremque mollitia recusandae! Quasi, recusandae quam? Ea
              unde quisquam alias asperiores, doloremque nisi dolor libero nihil
              ratione. Harum, placeat pariatur!
            </p>
            <h4 className="py-4 text-teal-600">Lenguajes y Herramientas</h4>
            <ul className="text-gray-800 py-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              src={consulting}
              width={100}
              height={100}
              alt="# code image"
              className="inline justify-center"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Coding for you</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ullam doloremque mollitia recusandae! Quasi, recusandae quam? Ea
              unde quisquam alias asperiores, doloremque nisi dolor libero nihil
              ratione. Harum, placeat pariatur!
            </p>
            <h4 className="py-4 text-teal-600">Lenguajes y Herramientas</h4>
            <ul className="text-gray-800 py-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>MySQL</li>
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
            <Image src={web0} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="todoapp" />
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="card" />
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="qr component" />
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="rating component" />
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="versus rick and morty" />
          </div>
        </div>
      </section>
    </main>
  </div>
  );
}
