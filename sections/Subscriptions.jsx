import styles from '../styles';
import { subscriptions } from '../constants';
import { SubscriptionCard } from '../components';
import { SectionWrapper } from '../hoc';
import { TypingText } from '../components/CustomTexts';

const Subscriptions = () => (
  <div className="flex flex-col items-center max-sm:text-center">
    <h1 className={`${styles.sectionHeadText}`}>Pricing Plans</h1>
    <p className={`${styles.sectionSubText}`}>
      {/* <TypingText title="Account plans unlock additional features" /> */}
      Account plans unlock additional features.
    </p>
    <div className="px-10 my-5 py-2 bg-slate-400">
      <p className="text-white">Yearly Plan</p>
    </div>
    <div className="mt-20 flex flex-wrap gap-10">
      {subscriptions.map((subscription, index, link) => (
        <SubscriptionCard
          index={index}
          title={subscription.name}
          description={subscription.description}
          link={subscription.link}
        />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Subscriptions, '');
