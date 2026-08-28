import natsIcon from '../assets/nats.svg?url';
import hyperledgerIcon from '../assets/hyperledger.png?url';

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
		items: ['Docker', 'Podman', 'Git', 'Postman', 'Swagger', 'Hyperledger Fabric', 'NATS JetStream'],
	},
];
export const certification: Certification = {
	title: 'Software Quality Control Tester',
	issuer: 'Indonesian Professional Certification Authority',
	location: 'Indonesia',
	period: 'November 25, 2024 — November 25, 2027',
};

const devicon = (slug: string) =>
	`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;

const simpleIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const skillIcons: Record<string, string> = {
	Go: devicon('go/go-original'),
	'C#': devicon('csharp/csharp-original'),
	Java: devicon('java/java-original'),
	Dart: devicon('dart/dart-original'),
	JavaScript: devicon('javascript/javascript-original'),
	PHP: devicon('php/php-original'),
	Flutter: devicon('flutter/flutter-original'),
	React: devicon('react/react-original'),
	HTML: devicon('html5/html5-original'),
	CSS: devicon('css3/css3-original'),
	'Tailwind CSS': devicon('tailwindcss/tailwindcss-original'),
	'.NET Core': devicon('dotnetcore/dotnetcore-original'),
	Laravel: devicon('laravel/laravel-original'),
  'Node.js': devicon('nodejs/nodejs-original'),
	'REST API': simpleIcon('openapiinitiative'),
	PostgreSQL: devicon('postgresql/postgresql-original'),
	MySQL: devicon('mysql/mysql-original'),
	Supabase: devicon('supabase/supabase-original'),
	SQLite: devicon('sqlite/sqlite-original'),
  Docker: devicon('docker/docker-original'),
	Podman: devicon('podman/podman-original'),
	Git: devicon('git/git-original'),
	Postman: devicon('postman/postman-original'),
  Swagger: devicon('swagger/swagger-original'),
  'NATS JetStream': natsIcon,
	'Hyperledger Fabric': hyperledgerIcon,
};
