import Link from 'next/link';

import ImageSlideshow from '@/components/images-slideshow/slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>The Best Quality for the Best Price</h1>
            <p>Quality Guaranteed!</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Set Up a Visit</Link>
            <Link href="/meals">Our Catalog</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            At ChargePoint Supplies, we are a dedicated supplier of small electronics and gadgets,
            ranging from phone chargers and Bluetooth headphones to wireless speakers and
            portable batteries for both Apple and Android devices.
          </p>
          <p>
            Our process is simple:
            just give us a call or send us an email, and we&apos;ll be in touch to schedule a visit.
            We work with you to ensure your business has the products it needs to keep your customers
            connected and powered up.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why ChargePoint Supplies?</h2>
          <p>
          When you choose ChargePoint Supplies, you&apos;re choosing top-quality products at competitive prices. 
          Our commitment to responsibility and 
          dedication means we go the extra mile to ensure our clients are 
          satisfied and well-equipped to meet demand.
          </p>
          <p>
          We pride ourselves on building lasting relationships, consistently providing reliable service, 
          and helping your business succeed with the latest and most dependable electronic accessories.
          </p>
        </section>
      </main>
    </>
  );
}