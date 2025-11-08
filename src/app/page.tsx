import { AboutSection } from "@/components/landing/about-section";
import { HeroSection } from "@/components/landing/hero-section";
import TestimonialsSection from "@/components/landing/testimonials-section";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<TestimonialsSection />
			<AboutSection />
		</div>
	);
}
