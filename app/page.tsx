import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import ResearchSection from "./components/ResearchSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

export default function Page() {
    return (
        <main>
            <Layout>
                <HeroSection />
                <ProjectsSection />
                <ResearchSection />
                <AboutSection />
            </Layout>

        </main>
    );
}
