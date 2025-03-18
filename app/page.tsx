import ContactSection from "@/sections/contact-section";
import AboutUsSection from "@/sections/about-us-section";
import DevStoriesSection from "@/sections/dev-stories-section";
import NotesSection from "@/sections/notes-section";
import { NewHeroSection } from "@/sections/new-hero-section";


export default async function Landing() {

  return (
    <div className="">
      <NewHeroSection />
      <AboutUsSection />
      <ContactSection />
      <DevStoriesSection />
      <NotesSection /> 
    </div>
  );
}