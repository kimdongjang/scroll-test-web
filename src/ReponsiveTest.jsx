import React from 'react'
import './reponsiveTest.css'

export default function ReponsiveTest() {
  return (
    <div className="tw-max-w-md flex flex-col mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full" style={{ transform: "translate(-50 %, -50 %)" }}>
      <div className="md:flex" >
        <div className="md:shrink-0 ">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcdaum0%2Fbtrqyr6rUUi%2FRh2jwi47vcDky5lZ5ZTLHk%2Fimg.png" alt="Man looking at item at a store" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
      <div class="container p-8 lg:hidden">
        <div class="container__content">
        </div>
        <div class="container__separator"></div>
      </div>
      <div class="bg-green-200 md:bg-red-500 lg:bg-green-500">
        heelo
      </div>
    </div>
  )
}
