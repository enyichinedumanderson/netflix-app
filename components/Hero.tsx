'use client'
import Image from 'next/image'

export default function Hero(){


  return (
     <section className="relative h-[90vh] w-full flex items-center justify-center text-center px-6">

        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover brightness-[55%]"
          />
        </div>

        <div className="relative z-10 max-w-[800px] mt-[140px]">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unlimited movies, TV shows, and more
          </h1>

          <h2 className="text-xl mt-4 text-white/90 font-bold">
            Starts at ₦2,500. Cancel anytime.
          </h2>

          <p className="text-lg mt-6 mb-2 ">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center">
            
            <input
              type="email"
              placeholder="Email address"
              className="bg-black/60 border border-gray-500 px-4 h-[56px] w-full md:w-[380px] rounded text-white"
            />

            <button className="bg-red-600 hover:bg-red-700 h-[56px] w-[200px] px-6 rounded text-xl flex items-center gap-2 font-bold ">
            Get Started
            <span className="text-2xl leading-none ">›</span>
            </button>


          </div>

        </div>

      </section>
  )
}
