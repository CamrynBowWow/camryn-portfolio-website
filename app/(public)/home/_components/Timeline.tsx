export default function Timeline() {
	return (
		<>
			<div className='absolute -translate-x-1/2 bottom-0 left-1/2 right-1/2 h-3/4 w-[2px] bg-sky-400 rounded-md hidden timeline-hidden:block grayscale' />
			<div className='timeline-circle top-[103px] grayscale' />
			<div className='timeline-circle bottom-[84px] grayscale' />
		</>
	);
}
