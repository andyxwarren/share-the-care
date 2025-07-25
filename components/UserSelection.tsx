import React from 'react';
import { User } from '../types';

interface UserSelectionProps {
  users: User[];
  currentUser: User | null;
  onSetCurrentUser: (user: User | null) => void;
}

const UserSelection: React.FC<UserSelectionProps> = ({ users, currentUser, onSetCurrentUser }) => {
  if (users.length === 0) return null;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = e.target.value;
    const selectedUser = users.find(u => u.id === selectedUserId) || null;
    onSetCurrentUser(selectedUser);
  };
  
  return (
    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
         <span className="text-slate-400 font-medium">Viewing as:</span>
         <span className="font-bold text-cyan-400">{currentUser?.name || '...'}</span>
      </div>
      <div>
        <label htmlFor="user-select" className="sr-only">Switch User</label>
        <select 
            id="user-select"
            value={currentUser?.id || ''}
            onChange={handleSelect}
            className="bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
        >
            {users.map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default UserSelection;
