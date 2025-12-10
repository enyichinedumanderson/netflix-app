"use client";


import Image from "next/image";

export default function SignIn() {

  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full py-6 px-8">
        {/* Your downloaded logo */}
        
        <Image
          src="/logo.png"
          alt="Netflix Logo"
          width={140}
          height={50}
          className="object-contain"
        />
      </header>

      {/* Center Section */}
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-md px-6">
          <h1 className="text-4xl font-bold mb-8">Sign In</h1>

          {/* Input */}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-neutral-500 mb-4"
          />

          {/* Continue Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 transition text-white text-lg font-semibold py-4 rounded-md mb-6">
            Continue
          </button>

          {/* Get Help Dropdown (static) */}
          <div className="text-lg">
            <button className="flex items-center gap-1">
              Get Help <span className="text-2xl">⌄</span>
            </button>
          </div>

          {/* Recaptcha Note */}
          <p className="text-sm text-neutral-400 mt-8 leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure youre not a bot.
            <br />
            <span className="text-white cursor-pointer hover:underline">
              Learn more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
