import Navbar from './navbar';
import useDarkMode from "../hooks/useDarkMode";

const Main = () => {
  const { theme, isFirstTime, toggleTheme } = useDarkMode();

  return (
    <div className={`theme theme--${theme}`}>
      <Navbar isFirstTime={isFirstTime} theme={theme} toggleTheme={toggleTheme} visited={true} />
      <div className='flex justify-around items-center h-screen'>
        <div>
          <h1 className='text-3xl text-[#707175]'>
            My Name is Christian
          </h1>
          <p className='text-[#202124] max-w-3xl'>
            Hi guys! My name is Christian Ryan Refuerzo Macarse. My friends call me either Pablo or Wawi.
            A bit of a technical knowledgeable guy who gets confused every time if I am really qualified to
            be part of the Software Development scene or not. I really don’t know why I am able to make (barely)
            functional systems and real-world applied software 🤷‍♂️. I'm just really that type of a person who is
            very eager to learn and a curious freak. I would just typically go on to research and start with
            implemenation the moment i would get my momentum going. I am also that office guy you see who'll
            put tremendous effort to get things done.

            A *self-acclaimed full stack developer, I worked my way to such structures like CRUD, OOP, MVC,
            MERN stack, AdonisJS/ Expo/.NET framework, REST Api, and Javascript SPAs. I am not really good at all,
            but just a purely try hard individual. A team-person who is willing to listen and would love to have
            discussions about inputs and what to offer to the table. Now Hire me.
          </p>
        </div>
        <div>
          Background here
        </div>
      </div>
    </div>
  );
};

export default Main;
