
import React, { useState } from 'react';
import Header from './components/Header';
import Participants from './components/Participants';
import Schedule from './components/Schedule';
import ChildModal from './components/ChildModal';
import UserModal from './components/UserModal';
import UserSelection from './components/UserSelection';
import { SCHEDULE_DATA, PALETTE } from './constants';
import { Child, User } from './types';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(SCHEDULE_DATA.users);
  const [children, setChildren] = useState<Child[]>(SCHEDULE_DATA.children);
  const [schedule, setSchedule] = useState(SCHEDULE_DATA.schedule);
  
  const [currentUser, setCurrentUser] = useState<User | null>(users[0] || null);

  const [isChildModalOpen, setIsChildModalOpen] = useState(false);
  const [editingChild, setEditingChild] = useState<Child | null>(null);
  
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  
  const [parentForNewChild, setParentForNewChild] = useState<User | null>(null);

  // --- User Modal Handlers ---
  const handleOpenAddUserModal = () => {
    setEditingUser(null);
    setIsUserModalOpen(true);
  };
  const handleOpenEditUserModal = (user: User) => {
    setEditingUser(user);
    setIsUserModalOpen(true);
  };
  const handleCloseUserModal = () => {
    setIsUserModalOpen(false);
    setEditingUser(null);
  };
  const handleSaveUser = (userData: Omit<User, 'id'> & { id?: string }) => {
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...editingUser, ...userData } : u));
    } else {
      const newId = `user-${userData.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
      const newUser: User = { ...userData, id: newId };
      setUsers([...users, newUser]);
    }
    handleCloseUserModal();
  };
  const handleRemoveUser = (userId: string) => {
    if (window.confirm('Are you sure you want to remove this user and all their children? This action cannot be undone.')) {
      const newUsers = users.filter(u => u.id !== userId);
      const newChildren = children.filter(c => c.parentId !== userId);

      setUsers(newUsers);
      setChildren(newChildren);

      // If the current user is deleted, select the first user from the NEW list, or null if empty.
      if (currentUser?.id === userId) {
        setCurrentUser(newUsers[0] || null);
      }
    }
  };


  // --- Child Modal Handlers ---
  const handleOpenAddChildModal = (parent: User) => {
    setEditingChild(null);
    setParentForNewChild(parent);
    setIsChildModalOpen(true);
  };
  const handleOpenEditChildModal = (child: Child) => {
    setEditingChild(child);
    setIsChildModalOpen(true);
  };
  const handleCloseChildModal = () => {
    setIsChildModalOpen(false);
    setEditingChild(null);
    setParentForNewChild(null);
  };
  const handleSaveChild = (childData: Omit<Child, 'id' | 'color' | 'textColor' | 'parentId'>) => {
    if (editingChild) {
      setChildren(children.map(c => 
        c.id === editingChild.id ? { ...editingChild, ...childData } : c
      ));
    } else if (parentForNewChild) {
      const newId = childData.name.toLowerCase().replace(/\s+/g, '-') + `-${Date.now()}`;
      const newColor = PALETTE[children.length % PALETTE.length];
      const newChild: Child = {
        ...childData,
        id: newId,
        parentId: parentForNewChild.id,
        ...newColor,
      };
      setChildren([...children, newChild]);
    }
    handleCloseChildModal();
  };
  const handleRemoveChild = (childId: string) => {
    if (window.confirm('Are you sure you want to remove this child? They will be removed from all scheduled days.')) {
      setChildren(children.filter(c => c.id !== childId));
      
      const updatedSchedule = schedule.map(week => ({
        ...week,
        days: week.days.map(day => {
          if (day && day.children.includes(childId)) {
            return {
              ...day,
              children: day.children.filter(id => id !== childId),
            };
          }
          return day;
        }),
      }));
      setSchedule(updatedSchedule);
    }
  };

  // --- Schedule Host Handler ---
  const handleSetHost = (weekIndex: number, dayIndex: number, hostId: string | null) => {
      const newSchedule = [...schedule];
      const day = newSchedule[weekIndex].days[dayIndex];
      if (day) {
        day.hostId = hostId;
        setSchedule(newSchedule);
      }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <UserSelection users={users} currentUser={currentUser} onSetCurrentUser={setCurrentUser} />
        <Header />
        <main>
          <Participants
            users={users}
            children={children}
            currentUser={currentUser}
            onAddUser={handleOpenAddUserModal}
            onEditUser={handleOpenEditUserModal}
            onRemoveUser={handleRemoveUser}
            onAddChild={handleOpenAddChildModal}
            onEditChild={handleOpenEditChildModal}
            onRemoveChild={handleRemoveChild}
          />
          <Schedule 
            schedule={schedule} 
            users={users}
            children={children}
            currentUser={currentUser}
            onSetHost={handleSetHost}
          />
        </main>
        <footer className="text-center text-slate-500 mt-12 pb-4">
          <p>Share the Care &copy; 2025</p>
        </footer>
      </div>
      {isUserModalOpen && (
        <UserModal
          userToEdit={editingUser}
          onClose={handleCloseUserModal}
          onSave={handleSaveUser}
        />
      )}
      {isChildModalOpen && (
        <ChildModal
          childToEdit={editingChild}
          onClose={handleCloseChildModal}
          onSave={handleSaveChild}
        />
      )}
    </div>
  );
};

export default App;
