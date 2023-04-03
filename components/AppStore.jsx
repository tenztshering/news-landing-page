import Image from 'next/image';
import { memo } from 'react';

const AppStore = () => (
  <div className="flex justify-center items-center gap-2 w-full">
    <a href="https://play.google.com/store/apps/details?id=bt.jobajoba.news.myapp&hl=en&gl=US">
      <Image
        src="/google.svg"
        alt="google play store"
        width={100}
        height={100}
        quality={50}
        priority
        className="w-full h-[44px] max-sm:h-[35px] object-contain hover:opacity-50"
      />
    </a>
    <a href="https://apps.apple.com/bt/app/bhutannews/id6446471566">
      <Image
        src="/apple.svg"
        alt="google play store"
        width={100}
        height={100}
        quality={50}
        priority
        className="w-full h-[44px] max-sm:h-[35px] object-contain hover:opacity-50"
      />
    </a>
  </div>
);

export default memo(AppStore);
