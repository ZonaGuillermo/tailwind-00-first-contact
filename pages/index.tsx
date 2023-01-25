export default function Home() {
	return (
		<>
			<div className="text-white bg-slate-900 parent">
				<header className="w-full border-b border-l-8 p-2 font-bold">Hello</header>
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white bg-slate-900 parent">
				<div className="divide-y divide-slate-200">
					<div>01</div>
					<div>02</div>
					<div>03</div>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white bg-slate-900 parent">
				<input type="text" className="border-2 border-dashed outline-none border-rose-600" />
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white bg-slate-900 parent">
				<div className="grid grid-cols-3 divide-x-2 divide-red-500 divide-dashed">
					<div className="px-2">01</div>
					<div className="px-2">02</div>
					<div className="px-2">03</div>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white bg-slate-900 parent">
				<button className="outline outline-offset-2 outline-4 outline-rose-500 rounded-sm hover:ring-8 hover:ring-red-700 ">Button C</button>
			</div>
		</>
	)
}
