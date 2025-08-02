import React from 'react'
import { Accordion, AccordionItem } from "@heroui/accordion";
import { FAQS } from '@/constants/FAQ'

export default function FAQ() {
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

	return (
		<section
			id='faqs'
			className='mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 mt-20 scroll-m-20 sm:mt-24 sm:scroll-m-24 xl:mt-32 xl:scroll-m-32 pb-32'
		>
			<div className='mx-auto grid max-w-[40rem] grid-cols-1 gap-x-14 gap-y-16 lg:max-w-none lg:grid-cols-12'>
				<div className='lg:col-span-4'>
					<h2 className='text-lg leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#93603e] via-[#c18156] to-[#cea472] font-display'>
						Frequently asked questions
					</h2>
					<p className='mt-4 text-4xl font-heading tracking-tight text-black xl:text-6xl xl:leading-[3.5rem]'>
						Everything you need to know about wind UI
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#93603e] via-[#c18156] to-[#cea472] font-display'>
							.
						</span>
					</p>
				</div>
				<div className='-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6'>
					<section>
						<Accordion className='text-black'>
							{FAQS.map((faq) => (
								<AccordionItem
									className='text-black font-accent'
									classNames={{ title: 'text-danger, font-display' }}
									key={faq.key}
									aria-label={faq.label}
									title={faq.title}
								>
									{faq.content || defaultContent}
								</AccordionItem>
							))}
						</Accordion>
					</section>
				</div>
			</div>
		</section>
	)
}
