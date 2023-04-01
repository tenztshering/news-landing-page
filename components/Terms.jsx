import React from 'react';
import { termsandconditions } from '../constants';
import styles from '../styles';

const Terms = () => (
  <div>
    <h1 className={`${styles.sectionHeadText}`}>Terms & Conditions</h1>
    <p className={`${styles.sectionSubText}`}>
      By downloading and using our Bhutan News, you agree to the following Terms
      and Conditions. Please read these Terms and Conditions carefully.
    </p>
    <ol>
      {termsandconditions.map((terms) => (
        <li className="my-10">
          <span className={`${styles.sectionSubText}`}>{terms.key}.</span>{' '}
          {terms.articles}
        </li>
      ))}
    </ol>
  </div>
);

export default Terms;
