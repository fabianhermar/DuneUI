/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useCopy } from "@/hooks/useCopy";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CheckIcon from "@/core/design-system/Icons/CheckIcon";
import CopyIcon from "@/core/design-system/Icons/CopyIcon";

interface ComponentItem {
	title: string;
	category: string;
	code: string;
}

interface LibraryProps {
	components: ComponentItem[];
}

function LibraryItem({ title, code }: { title: string; code: string }) {
	const { activeTab, setActiveTab, copy, handleCopy } = useCopy(code);

	return (
		<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
			{/* Header */}
			<div className="flex items-center justify-between border-b border-gray-200 p-4">
				<h1 className="text-lg font-bold">{title}</h1>
				<button
					onClick={handleCopy}
					className="inline-flex items-center gap-1 rounded-lg bg-gray-50 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
				>
					{copy ? (
						<>
							<CheckIcon /> Copied!
						</>
					) : (
						<>
							<CopyIcon /> Copy
						</>
					)}
				</button>
			</div>

			{/* Content */}
			<div className="p-4">
				{activeTab === "preview" ? (
					<div dangerouslySetInnerHTML={{ __html: code }} />
				) : (
					<SyntaxHighlighter language="html" style={nightOwl}>
						{code}
					</SyntaxHighlighter>
				)}
			</div>

			{/* Tabs */}
			<div className="flex border-t border-gray-200">
				<button
					onClick={() => setActiveTab("preview")}
					className={`flex-1 py-2 ${activeTab === "preview" ? "bg-gray-100" : ""}`}
				>
					Preview
				</button>
				<button
					onClick={() => setActiveTab("code")}
					className={`flex-1 py-2 ${activeTab === "code" ? "bg-gray-100" : ""}`}
				>
					Code
				</button>
			</div>
		</div>
	);
}

export default function Library({ components }: LibraryProps) {
	// Agrupa por categoría
	const grouped: Record<string, ComponentItem[]> = {};
	components.forEach((c) => {
		if (!grouped[c.category]) grouped[c.category] = [];
		grouped[c.category].push(c);
	});

	return (
		<div className="space-y-10">
			{Object.entries(grouped).map(([category, comps]) => (
				<section key={category}>
					<h2 className="text-2xl font-bold mb-4">{category}</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{comps.map((c, i) => (
							<LibraryItem key={i} title={c.title} code={c.code} />
						))}
					</div>
				</section>
			))}
		</div>
	);
}
