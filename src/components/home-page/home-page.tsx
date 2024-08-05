import classNames from 'classnames';
import styles from './home-page.module.scss';
import headerStyles from '../header/header.module.scss';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>Got Sandwiches</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>Whn you gotta eat, eat BETTER!</div>
            </div>
            <a href="https://gotsandwiches.square.site/#most-popular" className={styles.button}>
                Order Menu!{' '}
            </a>
            <a href="tel:2153014009" className={styles.button1} type="button" >
                Or Call Now to Order! 
            </a>
            <img
                src="https://t3.ftcdn.net/jpg/02/10/13/06/360_F_210130694_BgPkDbKWdfDpPD6etk0SaGWwSsdNb39d.jpg"
                alt=""
                className={styles.image}
            />
            <div className={styles.paragraph}>
                <div className={styles.div1}>Savor Fresh, Handcrafted Goodness Daily</div>
            </div>
            <div className={styles.paragraph}>
                <div className={styles.div2}>
                    Our deli showcases an array of mouthwatering, freshly prepared dishes daily.
                    From crisp, colorful salads bursting with seasonal vegetables to hearty,
                    house-roasted meats sliced to order, every item reflects our commitment to
                    quality and flavor. Handcrafted sandwiches feature artisanal breads and premium
                    ingredients, while our rotating selection of homemade soups and sides provides
                    comforting tastes for every palate. Experience the difference that fresh,
                    thoughtfully sourced ingredients make in every delicious bite.{' '}
                </div>
            </div>
        </div>
    );
};
