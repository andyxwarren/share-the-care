import React, { useState, useEffect } from 'react';
import { Child } from '../types';
import { XMarkIcon } from './IconComponents';

interface ChildModalProps {
  childToEdit: Child | null;
  onClose: () => void;
  onSave: (childData: Omit<Child, 'id' | 'color' | 'textColor' | 'parentId'>) => void;
}

const ChildModal: React.FC<ChildModalProps> = ({ childToEdit, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    dietary: '',
  });

  useEffect(() => {
    if (childToEdit) {
      setFormData({
        name: childToEdit.name,
        dietary: childToEdit.dietary,
      });
    } else {
      setFormData({
        name: '',
        dietary: 'None',
      });
    }
  }, [childToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
        alert("Child's Name is required.");
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
            <h2 className="text-2xl font-bold text-white">{childToEdit ? 'Edit Child' : 'Add New Child'}</h2>
            <button type="button" onClick={onClose} className="p-1 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Child's Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
            </div>
            <div>
              <label htmlFor="dietary" className="block text-sm font-medium text-slate-300 mb-1">Dietary Requirements</label>
              <textarea id="dietary" name="dietary" value={formData.dietary} onChange={handleChange} rows={3} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="e.g., Celiac, Nut allergy, None"/>
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

export default ChildModal;
