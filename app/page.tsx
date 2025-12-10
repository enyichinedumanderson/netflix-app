import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturesGrid from '../components/FeaturesGrid'
import FAQ from '../components/FAQ'


export default function Home(){
return (
<main>
<Header/>
<Hero />
<FeaturesGrid />
<FAQ />


<footer className="bg-white/3 mt-12 py-8">
<div className="container px-6 text-sm text-white/80">
<div className="grid md:grid-cols-4 gap-6">
<div>
<h4 className="font-semibold mb-2">Company</h4>
<ul className="space-y-1">
<li>FAQ</li>
<li>Help Center</li>
<li>Account</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-2">Legal</h4>
<ul className="space-y-1">
<li>Privacy</li>
<li>Terms</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-2">Contact</h4>
<ul className="space-y-1">
<li>Contact Us</li>
</ul>
</div>
<div>
<label className="block mb-2">Select Language</label>
<select className="bg-white/6 rounded px-3 py-2">
<option>English</option>
<option>Français</option>
</select>
</div>
</div>


<p className="mt-6">© {new Date().getFullYear()} Netflix</p>
</div>
</footer>
</main>
)
}