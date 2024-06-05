import { Hobbies } from "@/components/Hobbies";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TopNav } from "@/components/ui/TopNav";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TopNav />
        <Hero />
        <About />
        <RecentProjects />
        <Certifications />
        <Hobbies />
        <Footer />
      </div>
    </main>
  );
}
