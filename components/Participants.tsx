import React from 'react';
import { User, Child } from '../types';
import { AlertIcon, UserIcon, PlusIcon, PencilIcon, TrashIcon } from './IconComponents';

interface ParticipantsProps {
  users: User[];
  children: Child[];
  currentUser: User | null;
  onAddUser: () => void;
  onEditUser: (user: User) => void;
  onRemoveUser: (userId: string) => void;
  onAddChild: (parent: User) => void;
  onEditChild: (child: Child) => void;
  onRemoveChild: (childId: string) => void;
}

const Participants: React.FC<ParticipantsProps> = ({ 
  users, children, currentUser,
  onAddUser, onEditUser, onRemoveUser,
  onAddChild, onEditChild, onRemoveChild 
}) => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6 border-b-2 border-slate-700 pb-2">
        <h2 className="text-3xl font-bold text-slate-200">Families</h2>
        <button
          onClick={onAddUser}
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          Add Family
        </button>
      </div>

      <div className="space-y-8">
        {users.map((user) => {
          const userChildren = children.filter(c => c.parentId === user.id);
          const isCurrentUser = currentUser?.id === user.id;

          return (
            <div key={user.id} className={`bg-slate-800 rounded-xl shadow-lg p-5 border ${isCurrentUser ? 'border-cyan-500' : 'border-slate-700'} transition-all`}>
              {/* User Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{user.name}</h3>
                  <p className="text-sm text-slate-400">{user.address}</p>
                   <a href={user.mapsLink} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Google Maps Link</a>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onAddChild(user)} disabled={!isCurrentUser} className="p-2 text-slate-300 bg-slate-700/50 rounded-md transition-colors hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm px-3 py-1.5"><PlusIcon className="w-4 h-4"/> Child</button>
                  <button onClick={() => onEditUser(user)} disabled={!isCurrentUser} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><PencilIcon className="w-5 h-5" /></button>
                  <button onClick={() => onRemoveUser(user.id)} disabled={!isCurrentUser} className="p-2 text-slate-400 hover:text-white hover:bg-red-500/50 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><TrashIcon className="w-5 h-5" /></button>
                </div>
              </div>

              {/* Children List */}
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                {userChildren.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {userChildren.map(child => (
                       <div key={child.id} className="relative bg-slate-700/50 rounded-lg p-4">
                         <div className="flex items-center space-x-3 mb-3">
                           <div className={`w-10 h-10 rounded-full ${child.color} flex items-center justify-center font-bold text-xl ${child.textColor} shrink-0`}>
                             {child.name.charAt(0)}
                           </div>
                           <div>
                             <h4 className="text-lg font-bold text-white">{child.name}</h4>
                           </div>
                         </div>
                         <div>
                           <h5 className="font-semibold text-slate-300 text-sm flex items-center gap-2"><AlertIcon className="w-4 h-4 text-yellow-400" /> Dietary Needs</h5>
                           <p className={`mt-1 text-sm text-slate-200 p-2 rounded-md ${child.dietary === 'None' ? 'bg-slate-600/50 text-slate-400' : 'bg-red-900/50 text-red-200'}`}>
                             {child.dietary}
                           </p>
                         </div>
                         <div className="mt-3 pt-3 border-t border-slate-600/50 flex justify-end gap-2">
                            <button onClick={() => onEditChild(child)} disabled={!isCurrentUser} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-600 rounded-md transition-colors disabled:opacity-50"><PencilIcon className="w-4 h-4" /></button>
                            <button onClick={() => onRemoveChild(child.id)} disabled={!isCurrentUser} className="p-1.5 text-slate-400 hover:text-white hover:bg-red-500/50 rounded-md transition-colors disabled:opacity-50"><TrashIcon className="w-4 h-4" /></button>
                         </div>
                       </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-center py-4">No children added for this family yet.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Participants;
