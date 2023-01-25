export default function Home() {
	return (
		<>
			
			{/* 
					We can center the container class by default indicating it in 
					tailwind.config.js file in theme section:
					
						module.exports = {
							theme: {
								container: {
									center: true,
								},
							},
						}

					This way we don't need to use mx-auto class all the time 
			*/}

			<div className="text-white parent bg-slate-900">
				<div className="container mx-auto p-2 bg-red-500">
					<h1>Hello</h1>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white parent bg-slate-900">
				<div className="container mx-auto p-2 columns-sm">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white parent bg-slate-900">
				<div className="container mx-auto p-2 columns-sm">
					<img className="w-64 float-left" src="https://images.unsplash.com/photo-1536853340577-a1e6343d8a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80" alt="from unsplash" />

					<img className="w-32 float-right" src="https://images.unsplash.com/photo-1536853340577-a1e6343d8a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80" alt="from unsplash" />

					<p className="clear-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
				</div>
			</div>

			<br />
			<hr />
			<br />

			{/**
			 * ? The second image should be in the right side of the last column... 
			 * ? How I can fix it?
			 */}

			<div className="text-white parent bg-slate-900">
				<div className="container mx-auto p-2 columns-sm relative">
					<img className="w-64 float-left" src="https://images.unsplash.com/photo-1536853340577-a1e6343d8a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80" alt="from unsplash" />

					<img className="w-32 float-right static right-0" src="https://images.unsplash.com/photo-1536853340577-a1e6343d8a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80" alt="from unsplash" />

					<p className="clear-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nemo eveniet ratione, natus quod voluptatem aliquid voluptatum vitae, amet beatae harum quae non earum! Quasi neque nesciunt nobis soluta laboriosam?</p>
				</div>
			</div>

			<br />
			<hr />
			<br />

			<div className="text-white parent bg-slate-900">
				<div className="container px-2">
					<div className="relative bg-red-500 rounded-lg p-8 w-32 h-32">
						<div className="w-24 h-24 bg-green-500 rounded-lg absolute inset-2">

						</div>
					</div>
				</div>
			</div>
		</>
	)
}
