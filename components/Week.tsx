import React from 'react';
import { Week as WeekType, Child, User } from '../types';
import DayCard from './DayCard';

interface WeekProps {
  week: WeekType;
  users: User[];
  children: Child[];
  currentUser: User | null;
  onSetHost: (dayIndex: number, hostId: string | null) => void;
  weekIndex: number;
}

const Week: React.FC<WeekProps> = ({ week, users, children, currentUser, onSetHost, weekIndex }) => {
  const childMap = new Map(children.map(c => [c.id, c]));
  const userMap = new Map(users.map(u => [u.id, u]));

  return (
    <article className="bg-slate-800/50 rounded-xl shadow-lg p-4 md:p-6 border border-slate-700">
      <h3 className="text-2xl font-bold text-cyan-400 mb-6">{week.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {week.days.map((day, dayIndex) => (
          <DayCard 
            key={dayIndex} 
            day={day} 
            childMap={childMap} 
            userMap={userMap}
            currentUser={currentUser}
            onSetHost={(hostId) => onSetHost(dayIndex, hostId)}
          />
        ))}
      </div>
    </article>
  );
};

export default Week;