import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectGallery from "@/components/ProjectGallery";
import Timeline from "@/components/Timeline";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      <Hero />
      <StatsBar />
      <Timeline />
      <ProjectGallery />
      <Toolkit />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
