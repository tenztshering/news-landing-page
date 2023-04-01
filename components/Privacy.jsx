import React from 'react';
import { privacyText } from '../constants';
import styles from '../styles';

const Privacy = () => (
  <div>
    <h1 className={`${styles.sectionHeadText}`}>Privacy Policy </h1>
    <p className={`${styles.sectionSubText} my-10`}>
      This Privacy Policy explains how we collect, use, and disclose your
      personal information in connection with Bhutan News. By using Bhutan News,
      you consent to the terms of this Privacy Policy.
    </p>
    {privacyText.map((privacy) => (
      <ol>
        <li className="my-10">
          <span className={`${styles.sectionSubText}`}>{privacy.key}</span>{' '}
          {privacy.articles}
        </li>
      </ol>
    ))}
    <p className={`${styles.sectionSubText} my-10`}>
      By using Bhutan News, you agree to this Privacy Policy and the collection,
      use, and disclosure of your personal information as described herein.
    </p>
  </div>
);

export default Privacy;
