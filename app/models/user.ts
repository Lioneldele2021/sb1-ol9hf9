export interface User {
  id: string;
  name: string;
  university: string;
  course: string;
  year: number;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  type: 'QUESTION' | 'EXAM' | 'DISCUSSION';
  timestamp: Date;
  replies: Reply[];
}

export interface Reply {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
}