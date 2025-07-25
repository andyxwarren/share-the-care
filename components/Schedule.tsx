import React from 'react';
import { Week as WeekType, Child, User } from '../types';
import Week from './Week';

interface ScheduleProps {
  schedule: WeekType[];
  users: User[];
  children: Child[];
  currentUser: User | null;
  onSetHost: (weekIndex: number, dayIndex: number, hostId: string | null) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule, users, children, currentUser, onSetHost }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-slate-200 border-b-2 border-slate-700 pb-2">Weekly Schedule</h2>
      <div className="space-y-12">
        {schedule.map((week, weekIndex) => (
          <Week 
            key={weekIndex} 
            week={week} 
            users={users}
            children={children}
            currentUser={currentUser}
            onSetHost={(dayIndex, hostId) => onSetHost(weekIndex, dayIndex, hostId)}
            weekIndex={weekIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Schedule;