export interface User {
  id: string;
  name: string;
  address: string;
  mapsLink: string;
}

export interface Child {
  id: string;
  parentId: string;
  name: string;
  dietary: string;
  color: string;
  textColor: string;
}

export interface Day {
  date: string;
  dayOfWeek: string;
  location: string;
  time: string;
  children: string[];
  notes?: string;
  hostId: string | null;
}

export interface Week {
  title: string;
  days: (Day | null)[];
}

export interface ScheduleData {
  users: User[];
  children: Child[];
  schedule: Week[];
}