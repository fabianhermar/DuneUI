'use client'

import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import CheckIcon from '@/core/design-system/Icons/CheckIcon'
import CopyIcon from '@/core/design-system/Icons/CopyIcon'

export default function Accordion1() {
	const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
	const [copy, setCopy] = useState(false)

	const exampleCode = `// Example React component
export default function SimpleComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        Simple Centered Component
      </h1>
    </div>
  )
}`

	const handleCopy = () => {
		navigator.clipboard.writeText(exampleCode)
		setCopy(true)
		setTimeout(() => {
			setCopy(false)
		}, 3000)
	}

	return (
		<div className='min-h-screen p-3 sm:p-4 md:p-6'>
			<div className='w-full max-w-6xl mx-auto'>
				{/* Header Navigation */}
				<div className="flex items-center justify-between border-b border-gray-200 pb-4">
					<div className="flex items-center gap-2 sm:gap-3">
						<h1 className="text-lg sm:text-xl font-bold font-heading text-gray-900">Simple centered</h1>
						<span className="hidden lg:inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold font-accent text-blue-700 ring-1 ring-inset ring-blue-700/10">
							Requires JS
						</span>
					</div>

					<div className="flex items-center gap-2 sm:gap-3">
						<div className="inline-flex rounded-lg shadow-xs gap-0.5">
							<button
								onClick={() => setActiveTab('preview')}
								className={`relative inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium rounded-lg
                  ${activeTab === 'preview'
										? 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300'
										: 'bg-gray-50 text-gray-600 hover:bg-gray-100'
									}`}
							>
								<svg className="sm:mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span className="hidden sm:inline font-accent">Preview</span>
							</button>
							<button
								onClick={() => setActiveTab('code')}
								className={`relative -ml-px inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium rounded-lg
                  ${activeTab === 'code'
										? 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300'
										: 'bg-gray-50 text-gray-600 hover:bg-gray-100'
									}`}
							>
								<svg className="sm:mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="m8 6-6 6 6 6M16 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span className="hidden sm:inline font-accent">Code</span>
							</button>
						</div>

						<button
							onClick={handleCopy}
							className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
						>
							{copy ? (
								<>
									<CheckIcon />
									<span>Copied!</span>
								</>
							) : (
								<>
									<CopyIcon />
									<span>Copy</span>
								</>
							)}
						</button>
					</div>
				</div>

				{/* Content */}
				<div className='bg-white rounded-lg mt-4 border border-gray-200 overflow-hidden'>
					{activeTab === 'preview' ? (
						<div className="flex min-h-[300px] sm:min-h-[400px] items-center justify-center p-4">
							<h2 className="text-2xl sm:text-3xl font-bold text-center">
								Simple Centered Component
							</h2>
						</div>
					) : (
							<div className="max-w-full overflow-x-auto">
							<SyntaxHighlighter
								language='javascript'
								style={nightOwl}
									customStyle={{
										padding: '20px',
										scrollbarWidth: 'thin',
									}}
							>
								{exampleCode}
							</SyntaxHighlighter>
							</div>
					)}
				</div>
			</div>
		</div>
	)
}

