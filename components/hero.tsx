import Link from 'next/link';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className='hero_container'>
      <h4>Hi, my name is </h4>
      <h1>Ankit Kr. Chowdhury.</h1>
      <h2>I build things for the web.</h2>
      <p>
        Enthusiastic student web developer with a keen interest in learning and
        applying front-end and back-end technologies. Dedicated to honing skills
        creating web solutions that captivate users solve real-world challenges.
      </p>
      <Link href='mailto:ankitparallax@gmail.com'>Hire me!</Link>
    </section>
  );
}
