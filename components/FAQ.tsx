'use client'

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "What is Netflix?", a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week! "},
    { q: "How much does Netflix cost?", a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500/month." },
    { q: "Where can I watch?", a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
    { q: "How do I cancel?", a: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
    { q: "What can I watch on Netflix?", a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
    { q: "Is Netflix good for kids?", a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2 text-left">
          {faqs.map((item, index) => (
            <div key={index} className="bg-[#2D2D2D]">
              <button
                className="w-full flex justify-between items-center px-6 py-6 text-left text-xl md:text-2xl font-medium hover:bg-[#3A3A3A] transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.q}
                <Plus
                  size={32}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-6 text-lg md:text-xl border-t border-black/30">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}