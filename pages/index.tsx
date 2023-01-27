export default function Home() {
	return (
		<>
			<div className="parent p-4">
				<div className="inline-block p-4 text-black bg-white border rounded-lg shadow-inner">
					<h1 className="text-2xl">Hello</h1>
					<p className="mb-4">This is my card</p>
					<button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-indigo-500/4 opacity-25">
						Say Hello
					</button>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="parent p-4">
				<div className="inline-block p-4 text-black bg-white border rounded-lg shadow-inner blur hover:blur-none transition">
					<h1 className="text-2xl">Hello</h1>
					<p className="mb-4">This is my card</p>
					<button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-indigo-500/4 opacity-25">
						Say Hello
					</button>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="parent p-4">
				<div className="inline-block p-4 text-black bg-white border rounded-lg shadow-inner">
					<img
						src="https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="from unsplash"
						className="w-64 mb-4 brightness-125 hover:contrast-50"
					/>
					<h1 className="text-2xl">Hello</h1>
					<p className="mb-4">This is my card</p>
					<button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-indigo-500/4 opacity-25">
						Say Hello
					</button>
				</div>
			</div>
		</>
	)
}
