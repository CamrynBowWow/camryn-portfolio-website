'use client';

import Content from '@/components/about/Content';
import TechStack from '@/components/about/TechStack';
import {
	MainContent,
	LanguagesContent,
	FrameworksContent,
	OtherContent,
	OrmsContent,
	LibrariesContent,
	DatabasesContent,
} from '@/content/about';
import { useState } from 'react';
import Certificate from './_component/Certificate';
import CertificatesContent from './_component/CertificatesContent';

export default function AboutPage() {
	const [certificate, setCertificate] = useState<string>('');
	const [isCertificateDisplayed, setIsCertificateDisplay] = useState<boolean>(false);

	const changeCertificate = (value: string) => {
		setCertificate(value);
		setIsCertificateDisplay(true);
	};

	const certificateDisplay = () => {
		setIsCertificateDisplay(!isCertificateDisplayed);
		console.log(certificate);
	};

	return (
		<section className='container flex flex-col gap-10 relative'>
			<Content main={MainContent} />
			<TechStack stack={LanguagesContent} />
			<TechStack stack={FrameworksContent} />
			<TechStack stack={DatabasesContent} />
			<TechStack stack={LibrariesContent} />
			<TechStack stack={OrmsContent} />
			<TechStack stack={OtherContent} />
			{/* <Certificate
				pdf={certificate}
				isDisplayed={isCertificateDisplayed}
				setIsDisplayed={certificateDisplay}
			/> */}
			<CertificatesContent changeCertificate={changeCertificate} />
		</section>
	);
}
