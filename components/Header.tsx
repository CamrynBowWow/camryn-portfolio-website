import NavLink from './NavLink';

export default function Header() {
	return (
		<header className='flex justify-center fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm border-b-2'>
			<nav className='container flex max-w-3xl items-center justify-center'>
				<ul className='flex items-center gap-6 text-sm text-muted-foreground sm:gap-10'>
					<li>
						<NavLink
							href='/home'
							className='p-2 transition-colors text-foreground hover:text-muted-foreground'
							aria-label='home'
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							href='/projects'
							className='p-2 transition-colors text-foreground hover:text-muted-foreground'
							aria-label='projects'
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							href='/about'
							className='p-2 transition-colors text-foreground hover:text-muted-foreground'
							aria-label='about'
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							href='/jobs'
							className='p-2 transition-colors text-foreground hover:text-muted-foreground'
							aria-label='about'
						>
							Jobs
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
