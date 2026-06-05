import { useState } from 'react'

export function useCopy(code: string) {
	const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
	const [copy, setCopy] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(code)
		setCopy(true)
		setTimeout(() => setCopy(false), 3000)
	}

	return {
		activeTab,
		setActiveTab,
		copy,
		handleCopy
	}
}
