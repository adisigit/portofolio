export interface Education {
	institution: string;
	degree: string;
	location: string;
	period: string;
	gpa?: string;
}

export const education: Education[] = [
	{
		institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
		degree: 'D4 Teknik Informatika (Bachelor of Informatics Engineering)',
		location: 'Surabaya, Indonesia',
		period: '2022 — July 2026',
		gpa: '3.79 / 4.00',
	},
];
