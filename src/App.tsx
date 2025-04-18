import React from 'react';

import { Loader2} from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';

import Contact from './Contact';
import Header from './Header';
import { cn } from '@/lib/utils';
import Certification from './Certification';
cn();

// --- Main App Component ---
const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100); // Reduced timeout to 1 second for faster initial load

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-950">
            {isLoading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <Loader2 className="animate-spin text-4xl text-purple-400" />
                </div>
            ) : (
                <>
                    <Header/>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Certification />
                    <Education/>
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
