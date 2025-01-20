import classNames from 'classnames';
import styles from './about.module.scss';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.text}>
                <div className={styles.title}>About Got Sandwiches</div>
                <div className={styles.paragraph}>
                    Hey there, sandwich seekers! Pull up a chair and let us tell you a story about
                    why we&apos;re not your average sandwich shop.{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Our Story: Keeping It Real Since Day One</div>
                <div className={styles.paragraph}>
                    Remember when food was, you know, actually fresh? Not &quot;freshly thawed&quot;
                    or &quot;freshly photographed for social media&quot; – but genuinely, honestly,
                    still-remembers-what-sunshine-feels-like fresh? That&apos;s our jam (and yes,
                    even our jam is fresh).{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>What Makes Us Different?</div>
                <div className={styles.paragraph}>
                    Real Food, Real Talk We don&apos;t have a fancy origin story about a secret
                    family recipe passed down through generations of sandwich artisans. What we do
                    have is a genuine commitment to making really good sandwiches with ingredients
                    that haven&apos;t spent more time in cold storage than you spent in high school.{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Our Own Delivery Heroes</div>
                <div className={styles.paragraph}>
                    Tired of playing &quot;Where&apos;s My Food?&quot; with delivery apps? So were
                    we. That&apos;s why we handle our own FREE delivery service. Our drivers have
                    one mission: get your sandwich to you with all its ingredients actually still in
                    it. Revolutionary, we know!{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Fresh &gt; Frozen</div>
                <div className={styles.paragraph}>
                    While everyone else is playing Tetris with frozen packages in their freezer,
                    we&apos;re over here doing things the old-fashioned way – you know, actually
                    cooking and preparing food. Our vegetables remember what dirt looks like, our
                    cookies and desserts were baked this morning, and our meats haven&apos;t been
                    geometrically engineered to fit perfectly on a sandwich robot assembly line.{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Our Promise to You</div>
                <div className={styles.paragraph}>
                    When we say &quot;When You Gotta Eat, Eat Better,&quot; we mean it. No fancy
                    marketing fluff, no pretentious menu descriptions, no need to Google translate
                    our ingredient list. Just honest-to-goodness good food, prepared fresh,
                    delivered free, and guaranteed not to have been taste-tested by your delivery
                    driver.{' '}
                </div>
            </div>
            <div className={styles.grid1}>
                <div className={styles.text}>
                    <div className={styles.title}> What We Are:</div>
                    <div className={styles.paragraph}>
                        <ul>
                            <li>- Fresh food enthusiasts</li>
                            <li>
                                - Sandwich craftspeople (without the pretentious
                                &quot;craftspeople&quot; attitude)
                            </li>
                            <li>- Your lunch salvation</li>
                            <li>- Actually cooking real food</li>
                        </ul>{' '}
                    </div>
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>What We&apos;re Not:</div>
                    <div className={styles.paragraph}>
                        <ul>
                            <li>- A science experiment in food preservation</li>
                            <li>- A photography studio for food glamour shots</li>
                            <li>- A distribution center for frozen food companies</li>
                            <li>- Whatever Karen thinks we should be</li>
                        </ul>{' '}
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Join the Fresh Revolution</div>
                <div className={styles.paragraph}>
                    Whether you&apos;re escaping the sad desk lunch blues, dodging another meal-prep
                    Sunday, or just craving a sandwich that doesn&apos;t taste like it was made
                    during the previous administration, we&apos;ve Got you covered.{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Our Bottom Line</div>
                <div className={styles.paragraph}>
                    Life&apos;s complicated enough. Finding good food shouldn&apos;t be. At Got
                    Sandwiches, we&apos;re keeping it simple, keeping it fresh, and keeping it real.
                    Because when you gotta eat, you deserve better than a sandwich that&apos;s older
                    than your Netflix subscription.{' '}
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.paragraph}>
                    Visit us, order online, or give us a call. We&apos;ve Got what you need, and
                    we&apos;ve Got it fresh.{' '}
                </div>
            </div>
        </div>
    );
};
