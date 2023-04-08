import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { SectionWrapper } from '../hoc';

const Brands = () => (
  <section>
    <Marquee gradientColor={[18, 18, 18]} className="my-10">
      <Image
        src="/Brand/BhutanToday.png"
        width={300}
        height={300}
        className="mx-10 grayscale hover:grayscale-0 cursor-pointer"
        loading="lazy"
      />
      <Image
        src="/Brand/businessbhutan.png"
        width={300}
        height={300}
        className="mx-10 grayscale hover:grayscale-0 cursor-pointer"
        loading="lazy"
      />
      <Image
        src="/Brand/Kuensel.png"
        width={300}
        height={300}
        className="mx-10 grayscale hover:grayscale-0 cursor-pointer"
        loading="lazy"
      />
      <Image
        src="/Brand/TheBhutanese.png"
        width={300}
        height={300}
        className="mx-10 grayscale hover:grayscale-0 cursor-pointer"
        loading="lazy"
      />
    </Marquee>
  </section>
);

export default SectionWrapper(Brands, ' ');
