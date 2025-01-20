import { codeDamnCertificates } from '@/content/about';

type CertificatesContentProps = {
	changeCertificate: (value: string) => void;
};

export default function CertificatesContent({ changeCertificate }: CertificatesContentProps) {
	const { title, content } = codeDamnCertificates;

	return (
		<div className=''>
			<h2>{title}</h2>
			<ul>
				{content.map((value) => (
					<li
						key={value.name}
						onClick={() => changeCertificate(value.image)}
						className='cursor-pointer p-6 border border-accent-foreground'
					>
						<p>{value.name}</p>
						<p>{value.date}</p>
						<iframe src={value.image} />
					</li>
				))}
			</ul>
		</div>
	);
}
