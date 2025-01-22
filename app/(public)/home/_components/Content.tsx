import { uniCertificates } from '@/content/about';
import CertificateCard from './CertificateCard';
import Timeline from './Timeline';

export default function Content() {
	return (
		<div className='relative w-full h-auto flex flex-col gap-5 items-center'>
			<h1 className='about-title text-center mb-1 sm:mb-5'>{uniCertificates.title}</h1>

			<CertificateCard
				qualificationName={uniCertificates.content[0].qualificationName}
				uni={uniCertificates.content[0].uni}
				dateRange={uniCertificates.content[0].dateRange}
				className='timeline-hidden:mr-auto mr-0 timeline-hidden:text-right'
			/>
			<CertificateCard
				qualificationName={uniCertificates.content[1].qualificationName}
				uni={uniCertificates.content[1].uni}
				dateRange={uniCertificates.content[1].dateRange}
				className='timeline-hidden:ml-auto timeline-hidden:text-left ml-0 sm:mt-3 timeline-hidden:mt-0'
			/>

			<Timeline />
		</div>
	);
}
