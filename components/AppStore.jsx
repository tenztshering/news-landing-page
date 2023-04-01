const AppStore = () => (
  <div className="flex justify-center items-center gap-2">
    <a href="/legal">
      <img
        src="/google.svg"
        alt="google play store"
        className="w-full h-[44px] max-sm:h-[35px] object-contain hover:opacity-50"
      />
    </a>
    <a href="#">
      <img
        src="/apple.svg"
        alt="google play store"
        className="w-full h-[44px] max-sm:h-[35px] object-contain hover:opacity-50"
      />
    </a>
  </div>
);

export default AppStore;
