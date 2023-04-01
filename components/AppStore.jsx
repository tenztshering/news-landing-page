import Image from 'next/image';
import { memo } from 'react';

const AppStore = () => (
  <div className="flex justify-center items-center gap-2">
    <a href="/legal">
      <Image
        src="/google.svg"
        alt="google play store"
        width={100}
        height={100}
        quality={50}
        loading="lazy"
        className="w-full h-[44px] max-sm:h-[35px] object-contain hover:opacity-50"
      />
    </a>
    <a href="/legal">
      <Image
        src="/apple.svg"
        alt="google play store"
        width={100}
        height={100}
        quality={50}
        loading="lazy"
        className="w-full h-[44px] max-sm:h-[35px] object-contain hover:opacity-50"
      />
    </a>
  </div>
);

export default memo(AppStore);
