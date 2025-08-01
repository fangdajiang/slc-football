import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Origin from '@/components/Origin';
import Future from '@/components/Future';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Origin />
        <Future />
      </main>
      <Footer />
    </>
  );
}