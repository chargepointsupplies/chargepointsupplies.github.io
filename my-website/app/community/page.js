
import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';
import Link from 'next/link';

export default function CommunityPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Speak directly with us: <Link href="/contact" className={classes["no-underline"]}><span className={classes.highlight}>Contact</span></Link>
                </h1>
                <p>One of our representatives will get right with you!</p>
            </header>
            {<main className={classes.main}>
            {/*     <h2>Community Perks</h2>

                <ul className={classes.perks}>
                    <li>
                        <Image src={mealIcon} alt="A delicious meal" />
                        <p>Share & discover recipes</p>
                    </li>
                    <li>
                        <Image src={communityIcon} alt="A crowd of people, cooking" />
                        <p>Find new friends & like-minded people</p>
                    </li>
                    <li>
                        <Image
                            src={eventsIcon}
                            alt="A crowd of people at a cooking event"
                        />
                        <p>Participate in exclusive events</p>
                    </li>
                </ul> */}
            </main>}
        </>
    );
}