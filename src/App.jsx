import { Copyright, CaretDoubleDown, GithubLogo, LinkedinLogo, Envelope, WebhooksLogo, CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs,FaDatabase, FaCodeBranch } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiStyledcomponents } from "react-icons/si";
import { useRef, useEffect, useState } from "react";
import { Skill } from "./components/skills/index";
import { Project } from "./components/projects/index";

export function Home() {
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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="w-full bg-dark font-title">
      <div className=" bg- pt-48 text-center text-white h-screen">
        <div  className="w-56 sm:bg-cover sm:bg-center sm:w-80 sm:h-80 sm:p-10 mx-auto border-2 border-green-500 rounded-full bg-brand"></div>
        <h1 className="text-6xl sm:text-7xl">Hello!, eu sou o Carlos</h1>
        <p className="text-4xl pb-16">Desenvolvedor Front-end</p>

        <CaretDoubleDown  className="animate-bounce text-6xl m-auto fill-indigo-500 "/>
      </div>

      <section className="bg-gray-900 p-10">
        <div ref={animateRef1}  className={`transition duration-1000 transform ${ isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <div className="lg:flex lg:items-center lg:gap-4 lg:text-sm xl:justify-center xl:py-8 text-white p-4 rounded-lg bg-about bg-no-repeat bg-cover transition duration-500 transform">

            <p className="text-sm font-about leading-6 backdrop-blur-md rounded-md xl:w-1/2"> 
              Olá! Meu nome é Carlos Santos, tenho 25 anos e sou comprometido em buscar constantemente conhecimento e desenvolvimento 
              para me tornar o melhor front-end que posso ser. Sou formado em Análise e Desenvolvimento de Sistemas e tenho uma paixão 
              pela programação e por todas as inovações que surgem no mundo da tecnologia. Estou ansioso para encontrar minha primeira 
              oportunidade como desenvolvedor profissional, para colocar em prática todo o aprendizado e conhecimento que obtive até agora, 
              e assim contribuir de maneira eficiente e dedicada para o crescimento da equipe. Além disso, estou empenhado em aprimorar 
              minhas habilidades técnicas em outras áreas, buscando me tornar um profissional completo e flexível. Reconheço a importância 
              das soft skills e estou constantemente trabalhando para melhorar minha comunicação, fortalecer meus relacionamentos interpessoais 
              e enfrentar desafios e adversidades com eficácia. Acredito firmemente que essas habilidades são indispensáveis em qualquer profissional.
              Também valorizo a colaboração e estou sempre aberto a compartilhar conhecimentos e aprender com os outros. Estou pronto para fazer parte de uma 
              quipe onde possamos crescer juntos e impulsionar a inovação.
            </p>

            <div className="xl:flex xl:items-center xl:gap-8">
              <div className="w-72 m-auto py-20 lg:py-5 bg-profile sm:bg-cover sm:bg-center sm:w-80 sm:h-80 sm:p-10"></div>

              <div className="text-center xl:flex xl:items-center xl:flex-col">
                <div className="flex justify-center gap-8 pb-10">
                  <button className="bg-white text-4xl text-black rounded-lg p-2 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="https://github.com/vithorDeveloper"> <GithubLogo/> </a></button>
                  <button className="bg-white text-4xl text-black rounded-lg p-2 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="mailto:seuemail@example.com"> <Envelope/> </a></button>
                  <button className="bg-white text-4xl text-black rounded-lg p-2 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="https://www.linkedin.com/in/vithor-santos"> <LinkedinLogo/> </a></button>
                </div>
                
                <button className="bg-white text-2xl text-black rounded-full py-2 px-10 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="./assets/Curriculum.pdf" download>Meu Curriculum</a></button>
              </div>
            </div>

          </div>
        </div>         
      </section>

      <section className="bg-skills bg-no-repeat bg-cover text-center py-20">
        <h1 className="text-zinc-200 text-8xl font-bold">Skills</h1>

        <div className="md:flex xl:text-left">
          <Skill
            icon={FaHtml5}
            name={"HTML"}
            title={"FrontEnd"}
            number={100}
            percentage={"100%"}
            description={"Com meu conhecimento em HTML, sou capaz de criar a estrutura de páginas web, definindo a hierarquia dos elementos e escrever um código limpo e semântico para melhorar a acessibilidade e a usabilidade dos sites"}
          />

          <Skill
            icon={FaCss3Alt}
            name={"CSS"}
            title={"FrontEnd"}
            number={100}
            percentage={"100%"}
            description={"Com habilidades em CSS, posso estilizar elementos HTML para criar layouts atraentes e responsivos. Além disso, posso personalizar fontes, cores e adicionar animações e transições para melhorar a experiência do usuário em sites e aplicativos web."}
          />
        </div>

        <div className="md:flex xl:text-left">
          <Skill
            icon={FaJsSquare}
            name={"JavaScript"}
            title={"FrontEnd"}
            number={70}
            percentage={"70%"}
            description={"Com meu domínio em JavaScript, sou capaz de adicionar interatividade às páginas web, criando funcionalidades dinâmicas que manipulam elementos da página e respondem a eventos do usuário. Além disso, posso criar scripts avançados para lidar com eventos, validar formulários, realizar requisições assíncronas e trabalhar com APIs, proporcionando uma experiência interativa e fluida aos usuários."}
          />

          <Skill
            icon={FaReact}
            name={"ReactJS"}
            title={"FrontEnd"}
            number={60}
            percentage={"60%"}
            description={"Tenho experiência em React para criar interfaces de usuário modernas e  responsivas para aplicativos web. Utilizo componentes reutilizáveis e aplico  atualizações precisas apenas nas partes necessárias, o que resulta em uma construção eficiente de interfaces. Além disso, possuo habilidades na integração com APIs externas, permitindo a comunicação fluida entre o aplicativo e os serviços externos."}
          />
        </div>

        <div className="md:flex xl:text-left">
          <Skill
            icon={FaNodeJs}
            name={"NodeJS"}
            title={"BackEnd"}
            number={50}
            percentage={"50%"}
            description={"Com o Node, sou capaz de construir aplicativos web do lado do servidor, lidar com solicitações e respostas HTTP, acessar bancos de dados e criar APIs robustas. Além disso, estou familiarizado com a utilização de pacotes e módulos do npm para ampliar a funcionalidade das minhas aplicações"}
          />

          <Skill
            icon={BiLogoTailwindCss}
            name={"TailwindCSS"}
            title={"FrontEnd"}
            number={70}
            percentage={"70%"}
            description={"Com minhas habilidades em Tailwind, crio interfaces de usuário responsivas e estilizadas de forma eficiente, aproveitando classes pré-definidas para estilos comuns, eliminando a necessidade de escrever CSS personalizado."}
          />
        </div>

        <div className="md:flex xl:text-left">
          <Skill
            icon={WebhooksLogo}
            name={"API RESTful"}
            title={"Web Services"}
            number={50}
            percentage={"50%"}
            description={"Sou capaz de projetar e desenvolver APIs eficientes, utilizando corretamente os verbos HTTP para diferentes operações. Além disso, possuo habilidades em autenticação, segurança e boas práticas na construção de endpoints, proporcionando uma experiência mais robusta e confiável aos usuários."}
          />

          <Skill
            icon={FaDatabase}
            name={"SQLite"}
            title={"Banco de dados"}
            number={70}
            percentage={"70%"}
            description={"Com experiência em SQLite, crio e gerencio bancos de dados leves, ideais para armazenar dados locais em aplicativos web ou móveis, garantindo a persistência de informações em meus projetos."}
          />
        </div>
        
        <div className="md:flex xl:text-left">
          <Skill
            icon={SiStyledcomponents}
            name={"Styled Components"}
            title={"FrontEnd"}
            number={90}
            percentage={"90%"}
            description={"Com meu conhecimento em HTML, sou capaz de criar a estrutura de páginas web, definindo a hierarquia dos elementos e escrever um código limpo e semântico para melhorar a acessibilidade e a usabilidade dos sites"}
          />

          <Skill
            icon={FaCodeBranch}
            name={"Git & Github"}
            title={"Versionamento"}
            number={100}
            percentage={"100%"}
            description={"Com amplo conhecimento em Styled Components, posso criar estilos avançados e reutilizáveis para meus componentes React. Utilizo recursos como estilização condicional, props dinâmicas e temas para garantir interfaces elegantes e de fácil manutenção, proporcionando uma experiência aprimorada de desenvolvimento front-end."}
          />
        </div>
      </section>

      <section className="text-center m-auto px-4 bg-gradient-to-r from-rose-950 via-red-900 to-red-950">
        <h1 className="text-white text-8xl text-center font-bold py-16">Projetos</h1>

        <div className="flex flex-col justify-center items-center lg:gap-20 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          <Project
            url={"https://github.com/vithorDeveloper/foodExplorerFront"}
            title={"FoodExplorer"}
            description={"Aplicação para um restaurante, com duas personas (Cliente e Admin). O cliente é capaz de ver os pratos e pesquisa-los por ingredientes ou nome do prato. O Admin pode adicionar, editar ou excluir os pratos, permite pesquisa-los também."}
            icons={[FaHtml5, FaReact, FaNodeJs, SiStyledcomponents, SiExpress, FaDatabase]}
          />

          <Project
            url={"https://github.com/vithorDeveloper/RocketNotesFront"}
            title={"RocketNotes"}
            description={"Aplicação para salvar e gerenciar suas anotações, sendo capaz de adicionar tags e links úteis"}
            icons={[FaHtml5, FaReact, FaNodeJs, SiStyledcomponents, SiExpress, FaDatabase]}
          />

          <Project
            url={"https://github.com/vithorDeveloper/rocketMoviesFront"}
            title={"RocketMovies"}
            description={"aplicação para acompanhar tudo que assistir, nela voçe pode visualizar e atulizar seu perfil, cadastrar, atualizar ou excluir filmes."}
            icons={[FaHtml5, FaReact, FaNodeJs, SiStyledcomponents, SiExpress, FaDatabase]}
          />

          <Project
            url={"https://github.com/vithorDeveloper/GitFav"}
            title={"GitFav"}
            description={"Esse é o GitFav, nele você poderá favoritar usuários do Github e removê-los da lista. Nele eu usei a API do Github para buscar as informações dos usuários."}
            icons={[FaHtml5, FaCss3Alt, FaJsSquare]}
          />

          <Project
            url={"https://github.com/vithorDeveloper/FocusTimer"}
            title={"Focus Timer"}
            description={"É um Temporizador estilo pomodoro, que tem algumas funcionalidades como, darkmode e voçe pode escolher o fundo musical que mais lhe agrada."}
            icons={[FaHtml5, FaCss3Alt, FaJsSquare]}
          />

          <Project
            url={"https://github.com/vithorDeveloper/devLinks"}
            title={"DevLinks"}
            description={"projeto simples de um Linktree, com intenção de praticar tailwindCSS"}
            icons={[FaHtml5, FaCss3Alt, BiLogoTailwindCss]}
          />
        </div>

        <h2 className="flex justify-center text-white text-4xl py-10"><a className="flex gap-4 p-2 transition-all hover:shadow-orange-50 hover:shadow-lg hover:scale-105 hover:bg-zinc-200 ease-in hover:text-rose-800 hover:rounded-lg" href="https://github.com/vithorDeveloper" target="blank"><CaretDoubleRight/> Ver mais no Github  <CaretDoubleLeft/></a></h2>
      </section>

      <footer className="md:px-20 md:flex md:justify-between lg:justify-around items-center text-white pt-3 border-t border-gray-500">
        <div className="flex items-center justify-center">

          <div className="w-24 bg-logo sm:bg-contain sm:bg-center sm:bg-no-repeat sm:p-10"></div>

          <div className="flex gap-8 ml-4">
            <button className="bg-white text-2xl text-black rounded-lg px-2 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="https://github.com/vithorDeveloper"  target="blank"> <GithubLogo/> </a></button>
            <button className="bg-white text-2xl text-black rounded-lg p-2 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="mailto:vithorsantos1029@gmail.com"  target="blank"> <Envelope/> </a></button>
            <button className="bg-white text-2xl text-black rounded-lg p-2 cursor-pointer transition-all hover:-translate-y-2 hover:-translate-x-1"><a href="https://www.linkedin.com/in/vithor-santos"  target="blank"> <LinkedinLogo/> </a></button>
          </div>

        </div>
        
        <div className="text-center flex justify-center">
          <span className="flex gap-1 text-xl text-center"><Copyright className="m"/>2023 por Carlos Santos, Todos os direitos Reservados.</span>
        </div>
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 text-xl bg-white text-rose-950 px-4 py-2 rounded-md shadow-md hover:bg-rose-700 hover:text-white transition-all focus:outline-none"
        >
          Voltar ao Topo
        </button>
      )}
    </main>
  )
}