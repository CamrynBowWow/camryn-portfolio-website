import parse from 'html-react-parser';

type ProjectBodyProps = {
	description: string;
	reason: string;
};

export default function ProjectBody({ description, reason }: ProjectBodyProps) {
	return (
		<div className='flex flex-col gap-5'>
			<div className='project-body-child-container'>
				<h2 className='project-body-header'>Features</h2>
				<div className='default-paragraph project-body-features'>{parse(description)}</div>
			</div>
			<div className='project-body-child-container'>
				<h2 className='project-body-header'>Purpose</h2>
				<div className='default-paragraph'>{parse(reason)}</div>
			</div>
		</div>
	);
}
