export default function Title() {
	return (
		<div className='flex transition-all duration-1000 flex-col h-40 sm:h-60 md:h-64 lg:h-80 w-full gap-[3px] sm:gap-0 md:gap-1 items-center justify-center'>
			<h1 className='font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl 1-xl:text-6xl tracking-wide text-gray-600'>
				The Marvelous
			</h1>
			<h2 className='font-semibold text-3xl x-ms:text-4xl sm:text-5xl md:text-7xl lg:text-8xl 1-xl:text-9xl uppercase tracking-wide'>
				Misadventures
			</h2>
			<p className='text-sm sm:text-lg lg:text-2xl 1-xl:text-4xl font-medium tracking-wide mt-0 sm:mt-1 md:mt-2'>
				of <span className='font-light tracking-tight capitalize text-gray-600'>unlikely</span>{' '}
				<span className='uppercase font-semibold'>Dev</span>
				<span className='font-light'>elop</span>
				<span className='uppercase'>er</span>
			</p>
		</div>
	);
}
