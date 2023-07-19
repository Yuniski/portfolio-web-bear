import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import deved from "../../public/foto-bg.png";
import code from "../../public/code.png";
import qa from "../../public/qa.png";
import consulting from "../../public/consulting.png";

export default function Home() {
  return (
    <main className="bg-white px-10">
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
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Yuniski Durán
          </h2>
          <h3 className="text-2xl py-2">Developer and QA</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
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
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
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
        <div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100} alt="# code image" className="text-center"/>
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
            <Image src={qa} width={100} height={100} alt="# code image" className="text-center"/>
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
            <Image src={consulting} width={100} height={100} alt="# code image" className="text-center"/>
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
    </main>
  );
}
