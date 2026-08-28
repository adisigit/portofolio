export interface Project {
	title: string;
	tech: string[];
	period: string;
	description: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
	{
		title: 'CTX',
		tech: ['Go', 'React', 'JWT/OAuth'],
		period: 'August 2025 — Present',
		description: [
			'Built a multi-component system consisting of a Go-based CLI, a Go backend service, and a React frontend for managing and interacting with context (CTX) resources.',
			'Implemented OAuth-based authentication with JWT signed and verified using RSA public/private key pairs to securely authenticate the CLI client against the backend.',
			'Designed the backend API in Go to issue, validate, and refresh JWT tokens, and developed a React frontend for managing users, sessions, and access control.',
		],
	},
	{
		title: 'E-Sign Blockchain',
		tech: ['Node.js', 'Golang', 'Hyperledger Fabric', 'NATS JetStream', 'Docker'],
		period: 'April 2025 — June 2025',
		description: [
			'Developed a blockchain-based electronic signature system using Node.js and Hyperledger Fabric with Golang chaincode integration.',
			'Implemented Private Data Collection (PDC) to provide controlled private data access and secure write operations between authorized organizations.',
			'Designed asynchronous communication workflows using NATS JetStream and containerized services with Docker for scalable deployment.',
		],
	},
	{
		title: 'Nedo Studio BPMN AI Generator',
		tech: ['.NET Core', 'C#', 'PostgreSQL', 'React'],
		period: 'February 2025 — June 2025',
		description: [
			'Developed an AI-powered BPMN generation system with chatbot-style interaction to assist users in creating BPMN diagrams through natural language prompts.',
			'Designed a custom BPMN JSON representation and implemented XML-to-JSON and JSON-to-XML conversion pipelines to reduce token consumption during AI processing.',
			'Built backend APIs using .NET Core and PostgreSQL with a React-based frontend for interactive BPMN editing and visualization.',
		],
	},
	{
		title: 'App Note API',
		tech: ['Golang', 'PostgreSQL'],
		period: 'February 2025',
		description: [
			'Developed a RESTful API for a note management application using Golang and PostgreSQL for data persistence.',
			'Implemented JWT-based authentication and authorization to secure API access and user sessions.',
			'Integrated Swagger documentation to provide interactive API testing and improve developer experience.',
		],
	},
	{
		title: 'TOEFL Mobile App',
		tech: ['Flutter', 'Supabase'],
		period: 'May 2024 — June 2024',
		description: [
			'Developed a TOEFL learning mobile application using Flutter with Supabase integration for backend services and data management.',
			'Implemented responsive UI slicing and integrated frontend features with backend APIs to support user authentication and learning modules.',
			'Designed interactive game-based learning features to improve user engagement and assist users in practicing TOEFL skills effectively.',
		],
	},
	{
		title: 'Journey Map',
		tech: ['Flutter', 'Laravel', 'PostgreSQL'],
		period: 'June 2024 — November 2024',
		description: [
			'Developed a travel and journey management mobile application using Flutter, Laravel, and PostgreSQL.',
			'Integrated Google Maps and Google Places API to provide location search, map visualization, and place discovery features.',
			'Implemented responsive UI slicing and integrated mobile frontend features with backend APIs for trip and location management.',
		],
	},
];
