'use client'
import { Tv, DownloadCloud, Smartphone, User } from 'lucide-react'

function Icon({name}:{name:string}) {
  switch(name){
    case 'tv': return <Tv className="w-8 h-8" />
    case 'download': return <DownloadCloud className="w-8 h-8" />
    case 'phone': return <Smartphone className="w-8 h-8" />
    default: return <User className="w-8 h-8" />
  }
}

export default function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }){

  return (
    <div className="bg-white/4 p-6 rounded-lg flex gap-4 items-start">
      <div className="p-3 rounded-md bg-white/6">
        <Icon name={icon} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-white/80 mt-1">{desc}</p>
      </div>
    </div>
  )
}
