import Linkedin from './icons/Linkedin';
import Instagram from './icons/Instagram';
import Facebook from './icons/Facebook';
import { Link } from 'react-scroll';
import Github from './icons/Github';

const Navbar = () => {

  const handleChange = (SocialMedia) => {
    window.open(SocialMedia, '_blank');
  }

  return (
      <nav className="flex flex-row gap-12 text-center justify-end py-12 px-28 absolute top-0 left-0 right-0">
        <h3 className='text-xl text-white cursor-pointer'>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </h3>
        <h3 className='text-xl text-white cursor-pointer'>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </h3>

        <h3 className='text-xl text-white cursor-pointer'>
          <Link to="Projects" smooth={true} duration={500}>
            Projects
          </Link>
        </h3>
        
        <div className='flex flex-row justify-between gap-2 mb-1'>
          

          <button onClick={() => handleChange("https://www.facebook.com/hiba.ghazi.395")}>
            <Facebook /> 
          </button>

          <button onClick={() => handleChange("https://www.linkedin.com/in/hiba-ghazi-a72333289/")}>
            <Linkedin /> 
          </button>

          <button onClick={() => handleChange("https://www.instagram.com/hibaaa_gh/?hl=fr")}>
            <Instagram/>
          </button>

          <button onClick={() => handleChange('https://github.com/HibaGhz')}>
            <Github />
          </button>
        </div>

        <Link to="Message" smooth={true} duration={500}>
          <button className='text-white font-bold border border-white h-10 px-2'>Let's Connect</button>
        </Link>
        
      </nav>
  );
};

export default Navbar;
