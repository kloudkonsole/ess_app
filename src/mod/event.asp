<!-- component -->
<!--Follow link for animation in action https://play.tailwindcss.com/IpRdROqEoQ -->
<div class="mb-3">
	<h1 class="text-3xl font-bold">Events</h1>
	<p class="text-sm text-gray-500 uppercase font-bold"><%(d.events || []).length%> events</p>
</div>
<div class="mb-5">
	<%for(var i=0, evt, evts=d.events||[]; (evt = evts[i]); i++){%>
	<div class="mt-6 p-5 bg-gray-100 rounded-lg flex items-center justify-between space-x-8">
		<div class="flex-1 flex justify-between items-center">
			<div class="h-4 w-48 bg-gray-300 rounded"><% evt.type %></div>
			<div class="w-24 h-6 rounded-lg bg-purple-300"><% evt.start_on %></div>
		</div>
	</div>
	<%}%>
</div>
