import { Nav } from "./nav";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { EditorSection } from "./editor-section";
import { InstallSection } from "./install-section";
import { ActionSection } from "./action-section";
import { HooksSection } from "./hooks-section";
import { Footer } from "./footer";

export default function Home() {
  return (
    <div className="page-bg">
      <Nav />
      <Hero />
      <HowItWorks />
      <EditorSection />
      <InstallSection />
      <ActionSection />
      <HooksSection />
      <Footer />
    </div>
  );
}
