"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

type message = {
	id: number;
	text?: string;
	handle?: string;
	image?: string;
};

export const TestimonialsSection = () => {
	const messages = [
		{
			id: 1,
			text: "Our son Hartley has a greater level of confidence in his skill to take initiative and control over his actions. He also notices that he has a more active and aware mind after the class since he is making choices constantly. The focus and effort that is put towards the development of his character has deepened his awareness of himself and his ability to articulate this in his writing and imaginative play both at home and at school. In an age where devices have taken over, we have been privileged to find a program that both honors and endorses the deep reservoir of the human imagination",

			handle: "@Heidi (mother of Hartley age 12)",
		},
		{
			id: 2,
			text: "It’s really interesting to adapt your play-style to your characters, especially as they sometimes contrast your own personality. Though the game is based around fantasy, you end up learning how to think realistically and critically. Honestly, my only complaint is that the classes don’t go on for longer. [classes are 4 hours long]",
			handle: "@Shanti (age 15)",
		},
		{
			id: 3,
			image: "/landing/testimonials/Teacher-book-kids-costumes-768x512-1.jpg",
		},
		{
			id: 4,
			text: "I learnt the importance of evaluating a situation before jumping to conclusions, the helpfulness of working with others whom have skills I do not possess, and how fun it is to blindly run into the hands of danger. It’s a blanket of fun, wrapped in a layer of unsuspecting danger, and bundled, finally, in a…",
			handle: "@Kaesha (homeschooler)",
		},
		{
			id: 5,
			text: "I love going on an adventure and discovering new things. It’s fun. You can use spells, craft and fight. You’ll probably freak out when you die",
			handle: "@Eron (age 10)",
		},
		{
			id: 6,
			image: "/landing/testimonials/kids-at-green-school-making-game-rules.jpg",
		},
		{
			id: 7,
			text: "It’s fun and we learn lots of things, like strategy, team work, assessing the situation and making terrains",
			handle: "@Julian (age 10)",
		},
		{
			id: 8,
			text: "I learned to try new things. Originally I thought I would not like this thematic but actually I learnt a lot about trying new things",
			handle: "@Eve (age 12)",
		},
		{
			id: 9,
			image: "/landing/testimonials/table.png",
		},
	];

	const row1Messages = messages.slice(0, 5);
	const row2Messages = messages.slice(5, 9);

	const MessageCard = ({ message }: { message: message }) => {
		if (message.image) {
			return (
				<div
					className="`flex-shrink-0`
          w-[380px] min-h-[120px]
          md:w-[320px] md:min-h-[110px]
          border border-yellow-500
          rounded-2xl overflow-hidden cursor-pointer
          will-change-transform
          transition-transform duration-200 ease-in-out
          hover:border-yellow-500
          hover:-translate-y-1
          hover:shadow-[0_6px_18px_rgba(234,179,8,0.4)]"
				>
					<Image
						src={message.image}
						alt="Testimonial"
						className="w-full h-full object-cover"
						width={380}
						height={120}
					/>
				</div>
			);
		}

		return (
			<div
				className="`flex-shrink-0`
        w-[380px] min-h-[120px]
        md:w-[320px] md:min-h-[110px] md:p-5
        bg-white border border-yellow-500
        rounded-2xl p-6 cursor-pointer whitespace-normal
        will-change-transform
        transition-transform duration-200 ease-in-out
        hover:bg-yellow-500 hover:border-yellow-500
        hover:-translate-y-1
        hover:shadow-[0_6px_18px_yellow-500]"
			>
				<div className="flex flex-col gap-4 h-full">
					<p className="text-black text-[0.95rem] leading-[1.6] m-0 `flex-grow` whitespace-normal">
						{message.text}
					</p>
					<div className="flex items-center gap-3">
						<span className="text-black text-sm font-medium">
							{message.handle}
						</span>
					</div>
				</div>
			</div>
		);
	};

	const MarqueeRow = ({
		messages,
		direction = "left",
	}: {
		messages: message[];
		direction: "left" | "right";
	}) => {
		const marqueeRef = useRef<HTMLDivElement>(null);
		const animationRef = useRef<number | null>(null);
		const duplicatedMessages = [...messages, ...messages, ...messages];

		useEffect(() => {
			const marquee = marqueeRef.current;
			if (!marquee) return;

			let position = direction === "left" ? 0 : -50;
			const increment = direction === "left" ? -0.04 : 0.04;

			const animate = () => {
				position += increment;

				if (direction === "left" && position <= -50) {
					position = 0;
				} else if (direction === "right" && position >= 0) {
					position = -50;
				}

				marquee.style.transform = `translate3d(${position}%, 0, 0)`;
				animationRef.current = requestAnimationFrame(animate);
			};

			animationRef.current = requestAnimationFrame(animate);

			return () => {
				if (animationRef.current) {
					cancelAnimationFrame(animationRef.current);
				}
			};
		}, [direction]);

		return (
			<div className="w-full overflow-visible relative mb-5 py-[2px] last:mb-0">
				<div
					ref={marqueeRef}
					className="flex gap-5 will-change-transform w-max"
				>
					{duplicatedMessages.map((message, index) => (
						<MessageCard key={`${message.id}-${index}`} message={message} />
					))}
				</div>
			</div>
		);
	};

	return (
		<section className="w-full py-20 relative overflow-x-hidden">
			{/* Imagem de fundo */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/landing/testimonials/img.png"
					alt="Background"
					width={1920}
					height={1080}
				/>
			</div>

			{/* Conteúdo */}
			<div className="max-w-7xl mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h3 className="text-4xl font-semibold tracking-tight mb-4 bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] `bg-[length:200%_200%]` bg-clip-text text-transparent text-center inline-block whitespace-nowrap animate-gradientShift">
						Testimonials
					</h3>
				</div>

				<div className="relative w-full max-w-[1500px] mx-auto overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[200px] before:z-10 before:pointer-events-none `before:bg-gradient-to-r` `before:from-[#fff]` before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[200px] after:z-10 after:pointer-events-none `after:bg-gradient-to-l` `after:from-[#fff]` after:to-transparent">
					<MarqueeRow messages={row1Messages} direction="left" />
					<MarqueeRow messages={row2Messages} direction="right" />
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
