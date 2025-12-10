export default function Footer(){
return (
<footer className="py-12 px-6 text-sm text-white/70">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
<div>
<h4 className="font-semibold mb-2">Company</h4>
<ul className="space-y-1">
<li>FAQ</li>
<li>Investor Relations</li>
<li>Jobs</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-2">Community</h4>
<ul className="space-y-1">
<li>Account</li>
<li>Redeem gift</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-2">Useful</h4>
<ul className="space-y-1">
<li>Help Center</li>
<li>Privacy</li>
</ul>
</div>
<div>
<label className="block mb-2">Select language</label>
<select className="bg-black/60 input-focus px-3 py-2 rounded-md">
<option>English</option>
<option>Nigeria (English)</option>
</select>
</div>
</div>
<div className="border-t border-white/5 pt-6 text-xs">© {new Date().getFullYear()} Netflix-style UI. All rights reserved.</div>
</div>
</footer>
)
}