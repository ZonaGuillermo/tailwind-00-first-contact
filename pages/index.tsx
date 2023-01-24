export default function Home() {
  return (
    <div>
      <h1 className="text-3xl italic ">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base underline underline-offset-4 decoration-green-600 decoration-1 decoration-wavy">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="note text-xs">A little note</p>
      <div style= {{ width: '200px'}}>
        <p className="truncate">This is a long sentence with a lot of words to explain that truncate will truncate my sentence</p>
      </div>
    </div>
  )
}
