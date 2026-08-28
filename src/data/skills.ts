export interface SkillCategory {
	name: string;
	items: string[];
}

export interface Certification {
	title: string;
	issuer: string;
	location: string;
	period: string;
}

export const skillCategories: SkillCategory[] = [
	{
		name: 'Languages',
		items: ['Go', 'C#', 'Java', 'Dart', 'JavaScript', 'PHP'],
	},
	{
		name: 'Frontend',
		items: ['Flutter', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
	},
	{
		name: 'Backend',
		items: ['.NET Core', 'Laravel', 'Node.js', 'REST API'],
	},
	{
		name: 'Database',
		items: ['PostgreSQL', 'MySQL', 'Supabase', 'SQLite'],
	},
	{
		name: 'Tools & Platforms',
		items: ['Docker', 'Git', 'Postman', 'Swagger', 'Hyperledger Fabric', 'NATS JetStream'],
	},
];

export const certification: Certification = {
	title: 'Software Quality Control Tester',
	issuer: 'Indonesian Professional Certification Authority',
	location: 'Indonesia',
	period: 'November 25, 2024 — November 25, 2027',
};
