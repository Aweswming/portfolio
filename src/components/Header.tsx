import ProfilePic from "../public/perfil.png";
import { useTheme } from "../services/theme/ThemeContext";

export function Header() {
  const { changeTheme, theme } = useTheme();


  
  return (
    <header className="relative pt-14 max-w-screen-lg mx-6 lg:mx-auto">
      <i
        onClick={changeTheme}
        className={`${
          theme === "light" ? "ri-moon-line" : "ri-sun-line"
        } absolute top-6 right-0 text-xl cursor-pointer duration-300 text-title-color dark:text-dark-title-color`}
      />
      <div className="grid gap-6 gap-y-8">
        <div className="grid text-center">
          <div className="grid place-items-center mb-3 justify-self-center w-32 h-32 rounded-full border-[3.5px] border-first-color">
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-first-color to-first-color-satured overflow-hidden flex items-end justify-center">
              <img src={ProfilePic} className="w-7/4" alt="" />
            </div>
          </div>

          <h2 className="text-2xl text-title-color dark:text-dark-title-color">
            Awesoming
          </h2>
          <h3 className="text-xs font-medium mb-4 text-text-color dark:text-dark-text-color">
            Desenvolvedor <br></br>FULL-STACK
          </h3>

          <ul className="flex justify-center gap-x-3">
            <a
              href="https://www.twitter.com/Aweswming"
              target="_blank"
            >
              <i className="ri-twitter-box-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
            <a href="https://github.com/Aweswming" target="_blank">
              <i className="ri-github-line ri-lg font-xl text-title-color dark:text-dark-title-color duration-300 hover:text-first-color" />
            </a>
          </ul>
        </div>

        <div className="grid grid-cols-[repeat(3,max-content)] justify-center gap-x-4 xsm:gap-x-12 gap-6">
          <div className="text-center">
          <p className="font-medium text-sm text-text-color dark:text-dark-text-color">
            Anos de <br></br>trabalhos
            </p>
            <h3 className="mb-1 text-base text-title-color dark:text-dark-title-color">
              2
            </h3>
          </div>
          <div className="text-center">
          <p className="font-medium text-sm text-text-color dark:text-dark-text-color">
              Projetos <br></br>conclu??dos
            </p>
            <h3 className="mb-1 text-base text-title-color dark:text-dark-title-color">
              +10
            </h3>
          </div>
          <div className="text-center">
          <p className="font-medium text-sm text-text-color dark:text-dark-text-color">
              Clientes <br></br>satisfeitos
            </p>
            <h3 className="mb-1 text-base text-title-color dark:text-dark-title-color">
              20
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 xsm:flex-row items-center justify-center gap-x-4">
         

          <div className="flex items-center justify-center gap-x-1 text-xl leading-none">
            <a
              href="https://twitter.com/Aweswming"
              target="_blank"
              className="button button-gray"
            >
              <i className="ri-twitter-line w-5 h-5 text-black dark:text-white" />
            </a>
            <a
              href="https://discord.gg/fAjg27nNhE"
              target="_blank"
              className="button button-gray"
            >
              <i className="ri-discord-line w-5 h-5 text-black dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
