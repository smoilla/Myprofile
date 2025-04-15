import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  useEffect(() => {
    document.title = "Soujanya | Portfolio";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 px-6 md:px-24 py-12">
      <section className="flex flex-col gap-6 items-start justify-center h-screen max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Hi, I’m Soujanya 👋</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Technology enthusiast passionate about data-driven innovation, cloud systems, and building meaningful solutions in healthcare and beyond.
        </p>
        <div className="flex gap-4 mt-4">
          <Button>
            <a href="#about">About Me</a>
          </Button>
          <Button variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline">
            <a href="/Soujanya_Resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-md md:text-lg leading-relaxed">
          With experience in cloud architecture, data platforms, and application modernization, I’ve built scalable products that prioritize user experience and reliability. I thrive in cross-functional teams and enjoy turning complex ideas into simple, usable solutions. My interests lie at the intersection of engineering, healthcare, and sustainable design.
        </p>
      </section>

      <section id="projects" className="py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-4 text-md md:text-lg">
          <li><strong>Healthcare Analytics Platform:</strong> Designed a dashboard for real-time patient monitoring using FHIR APIs.</li>
          <li><strong>Cloud Cost Optimizer:</strong> Developed automation scripts to reduce multi-cloud spend by 25%.</li>
          <li><strong>AI-Powered Triage Tool:</strong> Led UX redesign and integrated AI modules to assist clinical decision-making.</li>
        </ul>
      </section>

      <section id="contact" className="py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="mb-2 text-md md:text-lg">📧 <a href="mailto:soujanya@email.com" className="underline text-blue-600">soujanya@email.com</a></p>
        <p className="text-md md:text-lg">🔗 <a href="https://www.linkedin.com/in/soujanya-profile" target="_blank" className="text-blue-600 underline">LinkedIn</a></p>
      </section>
    </main>
  );
}
