import { cn } from '@/lib/utils';

type CertificateProps = {
	pdf: string;
	isDisplayed: boolean;
	setIsDisplayed: (value: boolean) => void;
};

export default function Certificate({ pdf, isDisplayed, setIsDisplayed }: CertificateProps) {
	return (
		<div
			onClick={() => setIsDisplayed}
			className={cn('w-full z-10 absolute h-full bg-black/50', isDisplayed ? 'block' : 'hidden')}
		>
			{pdf && <iframe onClick={() => setIsDisplayed} src={pdf} width='100%' height='100%' />}
		</div>
	);
}
