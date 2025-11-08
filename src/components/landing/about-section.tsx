import { BookOpen, Hand, Lightbulb } from "lucide-react";

export const AboutSection = () => {
	return (
		<section className="py-20 px-4 `bg-gradient-to-b` from-white to-gray-50">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-block px-6 py-2 rounded-full border border-yellow-600 text-primary-700 text-sm font-medium mb-6">
						What We Do
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Role-Playing Games
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Imagine playing a highly complex narrative game with your classmates
						to collaboratively beat challenges
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Build Literacy */}
					<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
						<div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
							<BookOpen className="w-8 h-8 text-white" />
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Build Literacy
						</h3>
						<p className="text-gray-600 leading-relaxed">
							Engage students in reading, writing, and storytelling through
							immersive gameplay experiences that make learning natural and
							exciting.
						</p>
					</div>

					{/* Bolster Confidence */}
					<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
						<div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
							<Hand className="w-8 h-8 text-white" />
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Bolster Confidence
						</h3>
						<p className="text-gray-600 leading-relaxed">
							Students develop self-assurance through character development,
							decision-making, and collaborative problem-solving in a safe
							environment.
						</p>
					</div>

					{/* Ignite Imaginations */}
					<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
						<div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
							<Lightbulb className="w-8 h-8 text-white" />
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ignite Imaginations
						</h3>
						<p className="text-gray-600 leading-relaxed">
							Unlock creative potential through world-building, character
							creation, and narrative development that honors the deep reservoir
							of human imagination.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
