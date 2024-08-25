import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>GibWork - Collaborate on Open Source Projects</title>
        <meta
          name="description"
          content="Join top developers shaping the future of technology through open-source collaboration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <Hero />
        </section>
        <section >
          <FeaturedProjects />
        </section>
        <section >
          <Testimonials />
        </section>
      </main>

      <Footer />
    </div>
  );
}
