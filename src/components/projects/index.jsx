import {CaretDoubleLeft, CaretDoubleRight, GithubLogo, CaretCircleRight } from "@phosphor-icons/react";
import { useRef, useEffect, useState } from "react";

export function Project({icons, title, description, url}){
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
      <article  
        ref={animateRef1}
        className={`lg:m-auto lg:h-full text-center mb-16 text-white transition duration-1000 transform ${
        isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}>
            <div className="w-96 lg:h-full backdrop-blur-lg border-2 border-gray-400 rounded-xl p-4 text-xl shadow-gray-800 shadow-2xl transition-all hover:-translate-y-2 hover:-translate-x-1 hover:bg-zinc-400 ease-in hover:text-rose-800">
              <a className="flex gap-2 float-right" href={url} target="blanck">Ver repositório <CaretCircleRight className="mt-1"/></a> 
              <GithubLogo className="text-6xl flex mt-20"/>
              <p className="my-4 text-2xl">{title}</p>
              <p className="px-4">
                {description}
              </p>

              <p className=" pt-6 text-2xl">Tecnologias:</p>
              <div className="flex gap-2 justify-center mt-3 text-2xl">
                {icons.map((Icon, index) => (
                  <span key={index}>
                    {Icon && <Icon size={30} color={"white"}/>}
                  </span>
                ))}
              </div>
            </div>
      </article>
  )
}