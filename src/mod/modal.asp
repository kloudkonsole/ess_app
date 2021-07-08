<div class="absolute bg-black opacity-60 inset-0 z-0"></div>
<div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
	<div class="text-center">
		<h2 class="mt-6 text-3xl font-bold text-gray-900"><%d.title%></h2>
		<p class="mt-2 text-sm text-gray-600">Please sign in to your account</p>
	</div>
	<form class="mt-8 space-y-6 text-sm font-bold text-gray-700 tracking-wide">
		<div class="mt-8 content-center">
			<label for=email>Email</label>
			<input id=email name=email class="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="name@domain.com" required>
		</div>
		<div class="mt-8 content-center">
			<label for=password>Password</label>
			<input id=password name=password class="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="" required>
		</div>
		<p class="text-sm text-gray-300"> <span>Miniumum 8 characters</span> </p>
		<div class="flex items-center justify-between">
			<div class="text-sm">
				<a href="#" class="font-medium text-indigo-500 hover:text-indigo-500"> Forgot your password? </a>
			</div>
		</div>
		<div>
			<button type="submit" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
			Sign in
			</button>
		</div>
		<p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
			<span>Don't have an account?</span>
			<a href="#" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</a>
		</p>
	</form>
</div>
