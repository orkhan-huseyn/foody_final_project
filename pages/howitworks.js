import { motion } from 'framer-motion';

import LargeYellow from '../assets/images/howitworks/largesvg1.svg';
import LargeDelivery from '../assets/images/howitworks/largesvg2.svg';
import SmallYellow from '../assets/images/howitworks/smallsvg1.svg';
import SmallDelivery from '../assets/images/howitworks/largesvg2.svg';
import styles from '../styles/HowItWorks.module.css';
import Layout from 'components/Layout';

function HowItWorks() {
    return (
        <Layout>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 70,
                }}
            >
                <div className={styles.howItWorksTitle}>
                    <h1>How it works</h1>
                </div>

                <div className={styles.paragraph}>
                    <p>
                        Delivery may be extended during sale periods. Please
                        refer to the checkout page for an updated estimate for
                        your location. Kindly note that once you have placed an
                        order, it is no longer possible to modify your order.
                        Taxes and duties are included in all product prices.It
                        is possible to place an order with shipment to a
                        different address than your home or billing address when
                        paying with a credit card. Please note that Klarna
                        payments require that your order is shipped to your
                        registered home address.
                    </p>
                </div>

                <div className={styles.imageContainerLarge}>
                    <img src={LargeYellow.src} alt="yellow background" />
                    <img src={LargeDelivery.src} alt="delivery car" />
                </div>

                <div className={styles.imageContainerSmall}>
                    <img src={SmallYellow.src} alt="yellow background" />
                    <img src={SmallDelivery.src} alt="delivery car" />
                </div>
            </motion.div>
        </Layout>
    );
}

export default HowItWorks;
