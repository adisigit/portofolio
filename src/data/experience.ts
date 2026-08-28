export interface Experience {
	title: string;
	company: string;
	location: string;
	period: string;
	highlights: string[];
}

export const experience: Experience[] = [
	{
		title: 'Full Stack Developer Intern',
		company: 'Sinergi Informatika Semen Indonesia',
		location: 'Indonesia',
		period: 'June 2025 — November 2025',
		highlights: [
			'Developed a partner information system to manage organizational hierarchy, including departments and employees dynamically.',
			'Implemented features for managing employee data and document records within the system.',
			'Built modules for project and task management, including daily progress tracking for employees.',
			'Developed features to generate documents such as BAPP, BAST, SPK, and PO management to support operational workflows.',
		],
	},
	{
		title: 'Full Stack Developer Intern',
		company: 'Sinergi Informatika Semen Indonesia',
		location: 'Indonesia',
		period: 'January 2025 — June 2025',
		highlights: [
			'Developed a project management web application to manage task assignments, milestones, and deadlines for internal teams.',
			'Built RESTful APIs and backend logic using Laravel and MySQL to handle user tasks, reporting, and project tracking.',
			'Integrated backend services with frontend components, ensuring seamless data flow and system functionality.',
		],
	},
	{
		title: 'Media and Information Staff',
		company: 'Himpunan Mahasiswa Teknik Informatika (HIMIT)',
		location: 'PENS, Indonesia',
		period: '2025',
		highlights: [
			'Designed and created social media content (Instagram posts and posters) for organizational events.',
			'Utilized design tools such as Figma to produce visual materials.',
			'Collaborated with team members to ensure consistent and effective information delivery.',
		],
	},
];
