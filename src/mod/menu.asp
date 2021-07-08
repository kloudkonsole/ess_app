<!-- ref: https://tailwindcomponents.com/component/mobile-app-design -->
<%for (var i = 0, menu = d.menu, item; (item = menu[i]); i++) {%>
<a id="<%item.name%>" href="#" class="flex flex-grow items-center justify-center p-2 text-<%item.state%>-500 hover:text-sel-600">
	<div class="text-center">
		<span class="block h-8 text-3xl leading-8"><i class="<%item.icon%>"></i> </span>
		<span class="block text-xs leading-none"><%item.name%></span>
	</div>
</a>
<%}%>
