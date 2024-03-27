import { useState } from "react";


function App() {

  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)



  return (


    <div className="">
      <div className="flex justify-center py-8">
        <h1 className="font-extrabold text-5xl">Faq/Accordian</h1>
      </div>
      <div className="bg-blue-800 text-center rounded-xl mx-12 py-6 ">
        <div>
          <h3 className="text-3xl font-semibold text-slate-200 py-3">Frequently Asked Questions</h3>

        </div>
        <div className="  bg-white mx-12  py-3 ">
          <h5 className="text-xl">Is this a good product?</h5>
          <div className="flex justify-end ">

            <button className="px-16" onClick={() => setFaq1(!faq1)}>{
              faq1 ? <div className="">
                <h4>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis </h4>
              </div> : console.log('Not working')
            }
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>


            </button>

          </div>
        </div>
        <div className="flex justify-center bg-white mx-12 mt-5 py-3">
          <h5 className="text-xl">How much does it cost?</h5>
          <div className=" px-16 py-1">
            <button className="mx-14 " onClick={faq2}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>


            </button>
          </div>
        </div>
        <div className="flex justify-center bg-white mx-12 mt-5 mb-6 
        py-3">
          <h5 className="text-xl">When I can get it?  </h5>
          <div className=" px-12 py-1">
            <button className="mx-14" onClick={faq3}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>


            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
