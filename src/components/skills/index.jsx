import { useRef, useEffect, useState } from "react";

export function Skill({icon:Icon, name, title, description, percentage, number}){
  const [isVisible1, setIsVisible1] = useState(false);
  const animateRef1 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const position1 = animateRef1.current.getBoundingClientRect().top;
      setIsVisible1(position1 - windowHeight <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
      <article ref={animateRef1}  className={`text-white rounded-lg w-full flex justify-around lg:justify-center text-lg transition duration-1000 transform ${ isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
        <div className="mt-10 backdrop-blur-lg shadow-inner shadow-slate-600 pl-4 pt-4 rounded-lg w-3/4 hover:scale-105 hover:bg-zinc-600 transition-all">

          <div className="xl:flex">
            <div className="z-10 mr-4">
              <span className="bg-white w-20 rounded-lg p-2 flex items-center justify-center">{Icon && <Icon size={60} color={"black"}/>}</span>
            </div>

            <div className="leading-4 xl:text-left">
              <h1 className="text-2xl">{name}</h1>
              <p>{title}</p>

              <div className="bg-gray-300 h-3 w-60 mt-2 rounded-lg m-auto">
                <div className="bg-blue-500 h-3 rounded-lg" style={{ width: `${number}%` }}></div><span className="float-right pt-1">{percentage}</span>
              </div>
            </div>
          </div>

          <p className="text-center text-xl py-4 pr-4 leading-5">{description}</p>

        </div>          
      </article>
  )
}