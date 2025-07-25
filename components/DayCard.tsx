import React from 'react';
import { Day, Child, User } from '../types';
import { ClockIcon, LocationIcon, NoteIcon, UsersIcon, CheckCircleIcon, XCircleIcon } from './IconComponents';

interface DayCardProps {
  day: Day | null;
  childMap: Map<string, Child>;
  userMap: Map<string, User>;
  currentUser: User | null;
  onSetHost: (hostId: string | null) => void;
}

const DayCard: React.FC<DayCardProps> = ({ day, childMap, userMap, currentUser, onSetHost }) => {
  if (!day || (!day.location && !day.notes && !day.hostId)) {
    return (
      <div className="bg-slate-800 rounded-lg p-4 flex flex-col h-full border-2 border-dashed border-slate-700">
        <h4 className="font-bold text-slate-400">{day?.date || '...'}</h4>
        <div className="flex-grow flex items-center justify-center">
            <p className="text-slate-500">No care scheduled.</p>
        </div>
      </div>
    );
  }
  
  const host = day.hostId ? userMap.get(day.hostId) : null;
  const locationText = host ? `${host.name.split("'")[0]}'s House` : day.location;

  return (
    <div className="bg-slate-800 rounded-lg p-4 flex flex-col h-full border border-slate-700 hover:border-slate-600 transition-colors duration-300">
      <h4 className="font-bold text-lg text-slate-100">{day.dayOfWeek}</h4>
      <p className="text-sm text-slate-400 mb-4">{day.date}</p>

      <div className="space-y-3 flex-grow">
        {locationText && (
          <div className="flex items-start">
            <LocationIcon className="w-5 h-5 text-green-400 mt-0.5 mr-3 shrink-0" />
            <p className="text-slate-300">{locationText}</p>
          </div>
        )}
        {day.time && (
          <div className="flex items-start">
            <ClockIcon className="w-5 h-5 text-purple-400 mt-0.5 mr-3 shrink-0" />
            <p className="text-slate-300">{day.time}</p>
          </div>
        )}
        {day.children.length > 0 && (
          <div className="flex items-start">
            <UsersIcon className="w-5 h-5 text-blue-400 mt-0.5 mr-3 shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {day.children.map(childId => {
                const childInfo = childMap.get(childId);
                return childInfo ? (
                  <span key={childId} className={`px-2 py-0.5 text-xs font-semibold rounded-full ${childInfo.color} ${childInfo.textColor}`}>
                    {childInfo.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}
        {day.notes && (
          <div className="flex items-start pt-2 mt-2 border-t border-slate-700">
            <NoteIcon className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 shrink-0" />
            <p className="text-amber-300 text-sm">{day.notes}</p>
          </div>
        )}
      </div>

      {currentUser && (
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          {!host && (
            <button
              onClick={() => onSetHost(currentUser.id)}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-lg transition-colors text-sm"
            >
              <CheckCircleIcon className="w-5 h-5" />
              Offer to Host
            </button>
          )}
          {host && host.id === currentUser.id && (
            <button
              onClick={() => onSetHost(null)}
              className="w-full flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-3 rounded-lg transition-colors text-sm"
            >
              <XCircleIcon className="w-5 h-5" />
              Cancel Hosting
            </button>
          )}
          {host && host.id !== currentUser.id && (
             <div className="text-center text-sm text-slate-400 py-2">Hosted by {host.name}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default DayCard;