"use client";

import { SectionWrapper } from "../hoc";
import styles from "../styles";
import { Terms, Privacy } from "../components";
import Link from "next/link";
import { useState } from "react";

const LegalDocs = ({ children }) => {
  const [active, setActive] = useState();

  return (
    <section className="w-full flex justify-end max-sm:flex-col">
      <div className="flex flex-col gap-5 mt-20 max-sm:flex-row fixed left-20 ">
        <a href="/">
          <img src="/AppIcon.png" className="w-20 h-20" />
        </a>
        <p className={`${styles.heroSubText}`}>Legal Library</p>
        <hr />
        <div className={`${styles.sectionSubText}`}>
          <Link
            href="#"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="hover:text-white"
          >
            <p>Terms and conditions</p>
          </Link>
        </div>
        <hr />
        <div className={`${styles.sectionSubText}`}>
          <Link
            href="#"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 500);
            }}
            className="hover:text-white"
          >
            <p>Privacy</p>
          </Link>
        </div>
        <hr />
      </div>
      <div className="w-1/2 max-sm:w-fit">
        <Terms />
        <Privacy />
      </div>
    </section>
  );
};

export default SectionWrapper(LegalDocs);
