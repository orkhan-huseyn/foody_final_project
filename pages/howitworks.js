"use client";

import howItWorksStyles from "../styles/HowItWorks.module.css";
import howitworksSvg1 from "../Svg/howitworks1.svg";
import howitworksSvg2 from "../Svg/howitworks2.svg";
import howworksPhone1 from "../Svg/howworksPhone1.svg";
import howworksPhone2 from "../Svg/howworksPhone2.svg";
import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <motion.div
      className={howItWorksStyles.container}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 70,
      }}
    >
      <div className={howItWorksStyles.howItWorksTitle}>
        <h1>How it works</h1>
      </div>

      <div className={howItWorksStyles.paragraph}>
        <p>
          Delivery may be extended during sale periods. Please refer to the
          checkout page for an updated estimate for your location. Kindly note
          that once you have placed an order, it is no longer possible to modify
          your order. Taxes and duties are included in all product prices.It is
          possible to place an order with shipment to a different address than
          your home or billing address when paying with a credit card. Please
          note that Klarna payments require that your order is shipped to your
          registered home address.
        </p>
      </div>

      <div className={howItWorksStyles.imageContainerLarge}>
        <img src={howitworksSvg1.src} alt="yellow background" />
        <img src={howitworksSvg2.src} alt="delivery car" />
      </div>

      <div className={howItWorksStyles.imageContainerSmall}>
        <img src={howworksPhone1.src} alt="yellow background" />
        <img src={howworksPhone2.src} alt="delivery car" />
      </div>
    </motion.div>
  );
}

export default HowItWorks;
