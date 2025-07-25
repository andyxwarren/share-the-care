import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { XMarkIcon } from './IconComponents';

interface UserModalProps {
  userToEdit: User | null;
  onClose: () => void;
  onSave: (userData: Omit<User, 'id'>) => void;
}

const UserModal: React.FC<UserModalProps> = ({ userToEdit, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mapsLink: ''
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData({
        name: userToEdit.name,
        address: userToEdit.address,
        mapsLink: userToEdit.mapsLink
      });
    } else {
      setFormData({
        name: '',
        address: '',
        mapsLink: ''
      });
    }
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.address.trim()) {
        alert("Family Name and Address are required.");
        return;
    }
    onSave(formData);
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-lg border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white">{userToEdit ? 'Edit Family' : 'Add New Family'}</h2>
            <button type="button" onClick={onClose} className="p-1 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Family Name / Parent Name(s)</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
            </div>
             <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-1">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
            </div>
            <div>
              <label htmlFor="mapsLink" className="block text-sm font-medium text-slate-300 mb-1">Google Maps Link</label>
              <input type="url" id="mapsLink" name="mapsLink" value={formData.mapsLink} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
            </div>
          </div>
          <div className="flex justify-end items-center p-6 border-t border-slate-700 bg-slate-800/50 rounded-b-xl">
            <button type="button" onClick={onClose} className="text-white bg-slate-600 hover:bg-slate-700 font-bold py-2 px-4 rounded-lg transition-colors mr-2">
              Cancel
            </button>
            <button type="submit" className="text-white bg-cyan-500 hover:bg-cyan-600 font-bold py-2 px-4 rounded-lg transition-colors">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
