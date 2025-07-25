import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi I'm Vivek Tyagi</p>
            <p className="subtext">
              I'm a passionate Full Stack Developer with a strong foundation in
              JavaScript, React, Node.js, and MongoDB. I enjoy building
              responsive web applications that solve real-world problems.
              {/* As a
              quick learner and team player, I’m always eager to take on new
              challenges and grow.*/}
            </p>
          </div>
          <div className="inset-x-0 absolute pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg:gradient-to-t from-indigo" />
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              text="GRASP"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SOLID"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Patterns"
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SRP"
              style={{ rotate: "20deg", top: "10%", left: "30%" }}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              containerRef={grid2Container}
              image="assets/logos/csharp-pink.png"
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              containerRef={grid2Container}
              image="assets/logos/dotnet-pink.png"
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              containerRef={grid2Container}
              image="assets/logos/blazor-pink.png"
            />
          </div>
        </div>
        {/* grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext"> Time Zone</p>
            <p className="subtext ">
              {" "}
              I'm based in Delhi,India and open to work Fulltime remote or
              offline.{" "}
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start the project together
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%] ">
            <p className="headtext">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
