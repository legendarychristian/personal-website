import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import ResearchSection from "./components/ResearchSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ObserverProvider from './ObserverProvider';

export default function Page() {
    return (
        <main>
            <ObserverProvider>
                <Layout>
                    <HeroSection />
                    <ProjectsSection />
                    <ResearchSection />
                    <AboutSection />
                </Layout>
            </ObserverProvider>

        </main>
    );
}
