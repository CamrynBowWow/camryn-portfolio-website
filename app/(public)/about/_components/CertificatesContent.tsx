import TooltipWrapper from '@/components/TooltipWrapper';
import { codeDamnCertificates } from '@/content/about';
import Image from 'next/image';

type CertificatesContentProps = {
	changeCertificate: (value: string) => void;
};

export default function CertificatesContent({ changeCertificate }: CertificatesContentProps) {
	const { title, content } = codeDamnCertificates;

	return (
		<div className='flex flex-col gap-5 mt-5'>
			<h2 className='tech-stack-header'>{title}</h2>
			<ul className='grid grid-cols-1 md:grid-cols-2 1-xl:grid-cols-3 gap-y-4 gap-x-4 lg:gap-x-6'>
				{content.map((value) => (
					<li
						key={value.name}
						className='flex items-center justify-between flex-col py-6 px-4 x-sm:px-9 border-gray-300 h-auto sm:h-80 border gap-5 rounded-md shadow-md'
					>
						<div className='flex flex-col gap-2 w-full text-left'>
							<p className='text-lg lg:text-xl font-semibold tracking-[0.015em]'>{value.name}</p>
							<p className='text-sm lg:text-base text-slate-600 font-normal'>{value.date}</p>
						</div>
						<TooltipWrapper description='Click to Enlarge'>
							<div
								onClick={() => changeCertificate(value.image)}
								className='relative cursor-pointer h-[130px] sm:h-[150px] w-[220px] sm:w-[250px] hover:scale-105 duration-700'
							>
								<Image src={value.image} alt='Certificate Image' fill loading='lazy' />
							</div>
						</TooltipWrapper>
					</li>
				))}
			</ul>
		</div>
	);
}
