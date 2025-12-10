'use client'
import FeatureCard from './FeatureCard'

export default function FeaturesGrid(){
  return (
    <section className="py-12 bg-black">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <FeatureCard title="Enjoy on your TV" desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." icon="tv" />
          <FeatureCard title="Download your shows to watch offline" desc="Save your favorites easily and always have something to watch." icon="download" />
          <FeatureCard title="Watch everywhere" desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." icon="phone" />
          <FeatureCard title="Create profiles for kids" desc="Send kids on adventures with their favorite characters in a space made just for them — free with your membership." icon="user" />
        </div>
      </div>
    </section>
  )
}
         