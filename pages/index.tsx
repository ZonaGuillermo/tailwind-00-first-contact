export default function Home() {
  return (
    <>
      <div className="parent">
        <div>Header</div>
        <div className="flex flex-row">
          <div className="grow">Main content</div>
          <div className="flex flex-col">
            <div>Sidebar</div>
            <div>Menu</div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex">
          <div className="basis-3/12">Sidebar</div>
          <div className="basis-7/12">Main content</div>
          <div className="basis-2/12">Another sidebar</div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex">
          <div className="w-32">Sidebar</div>
          <div className="w-full">Main content</div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full bg-sky-500 md:w-32">Sidebar</div>
          <div className="w-full bg-red-500">Main content</div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-wrap">
            <div className="w-32 grow">01</div>
            <div className="w-32 grow">02</div>
            <div className="w-32 grow">03</div>
            <div className="w-32 grow">04</div>
            <div className="w-32 grow">05</div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex justify-between">
          <div>Sidebar</div>
          <div>Main content</div>
          <div>Another sidebar</div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex items-center justify-evenly">
          <div>Sidebar</div>
          <div>
            <h1>Main content</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem deserunt inventore, earum, eaque doloremque beatae nesciunt blanditiis sequi praesentium numquam pariatur. Possimus totam repellendus quisquam ad doloremque maiores minus reiciendis!</p>
          </div>
          <div>Another sidebar</div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="parent">
        <div>Header</div>
        <div className="flex items-baseline">
          <div className="pt-2 pb-6 bg-sky-500">01</div>
          <div className="pt-8 pb-12 bg-red-500">02</div>
          <div className="pt-12 pb-4 bg-green-500">03</div>
        </div>
      </div>
      
    </>
  )
}
