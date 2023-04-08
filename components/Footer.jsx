import { IoMail } from 'react-icons/io5';
import styles from '../styles';
import AppStore from './AppStore';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-between my-5">
        <div className="flex items-center gap-5">
          <a href="/">
            <img
              src="/AppIcon.png"
              alt="logo"
              className="w-full h-[44px] object-contain"
            />
          </a>
          <a href="/legal">
            <h4 className={`${styles.sectionSubText}`}>Legal</h4>
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <AppStore />
        <div className="flex justify-center items-center">
          <a
            href="mailto:bhutannews2023@gmail.com"
            className="cursor-pointer hover:opacity-50 duration-300 p-4 blue-cyan-gradient rounded-full"
          >
            <IoMail size={25} />
          </a>
        </div>
      </div>
      <div>
        <p className="text-gray-500">©{date} | BhutanNews</p>
      </div>
    </>
  );
};

export default SectionWrapper(Footer, '');
