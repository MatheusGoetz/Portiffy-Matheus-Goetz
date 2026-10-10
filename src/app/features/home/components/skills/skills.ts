
import { Component } from '@angular/core';

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: readonly string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly categories: readonly SkillCategory[] = [
    {
      id: 'frontend',
      number: '01',
      title: 'Frontend',
      description:
        'Interfaces modernas, responsivas e componentizadas.',
      technologies: [
        'Angular',
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
      ],
    },
    {
      id: 'backend',
      number: '02',
      title: 'Backend',
      description:
        'APIs REST, regras de negócio e integração entre sistemas.',
      technologies: [
        'Java',
        'Spring Boot',
        'C#',
        'ASP.NET Core',
        'Node.js',
        'Express',
        'Fastify',
      ],
    },
    {
      id: 'database',
      number: '03',
      title: 'Banco de Dados',
      description:
        'Modelagem, persistência e consultas de dados.',
      technologies: [
        'PostgreSQL',
        'Firebird',
        'SQLite',
        'SQL Server',
        'Prisma ORM',
      ],
    },
    {
      id: 'devops',
      number: '04',
      title: 'DevOps & Tools',
      description:
        'Versionamento, ferramentas e ambientes de desenvolvimento.',
      technologies: [
        'Git',
        'GitHub',
        'Docker',
        'Maven',
        'Vite',
        'VS Code',
        'Visual Studio',
      ],
    },
  ];
}
