export default function Home() {
  return (
    <div>
      <div className="m-4 p-2 pl-4 font-bold text-white bg-red-500">
        Hello
      </div>

        <div className="text-white font-bold m-2 w-40 h-40 bg-red-500">1</div>
        <div className="text-white font-bold m-8 -mt-8 w-20 h-20 bg-green-500 opacity-75">2</div>
    

      {/* NOT A GOOD PRACTISE for to get this behavior you have to use gap utilities */}
      <div className="flow-root">
        <p>NOT A GOOD PRACTISE for to get this behavior you have to use gap utilities</p>
        <div className="text-white font-bold -m-2 flex flex-wrap">
          <div className="text-white font-bold m-2 w-40 h-40 bg-red-500">1</div>
          <div className="text-white font-bold m-2 w-40 h-40 bg-green-500">2</div>
          <div className="text-white font-bold m-2 w-40 h-40 bg-blue-500">3</div>
        </div>
      </div>
    </div>
  )
}
