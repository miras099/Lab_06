export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    instructor: "Dr. Smith",
    description: "HTML, CSS, JavaScript and modern frontend basics."
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "Prof. Johnson",
    description: "Arrays, linked lists, stacks, queues, trees, graphs."
  },
  {
    id: 3,
    title: "Database Systems",
    instructor: "Dr. Lee",
    description: "Relational databases, SQL, normalization, transactions."
  },
  {
    id: 4,
    title: "Machine Learning",
    instructor: "Prof. Kim",
    description: "Supervised/unsupervised learning and basic ML workflow."
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}