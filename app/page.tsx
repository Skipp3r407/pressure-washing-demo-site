import Splash from "@/components/Splash";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CtaBand from "@/components/CtaBand";
import AdditionalServices from "@/components/AdditionalServices";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import ChatWidget from "@/components/ChatWidget";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  return (
    <>
      <Splash />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <CtaBand
          id="estimate"
          title="Request a free estimate"
          text={
            <>
              Tell us about your property and we will recommend the right wash. Call{" "}
              <a href="tel:+15555551234">(555) 555-1234</a> during business hours, or send a message—we typically reply
              within one business day.
            </>
          }
          buttonHref="#contact"
          buttonLabel="Request estimate"
        />
        <AdditionalServices />
        <BeforeAfter />
        <Reviews />
        <Gallery />
        <CtaBand
          variant="alt"
          title="Ready for a spotless exterior?"
          text={
            <>
              Share your address and what you would like cleaned—we will follow up with pricing options. Call{" "}
              <a href="tel:+15555551234">(555) 555-1234</a> during business hours for same-week scheduling when available.
            </>
          }
          buttonHref="#contact"
          buttonLabel="I want an estimate"
        />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
      <ChatWidget />
      <QuoteModal />
    </>
  );
}
