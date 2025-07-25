import { ScheduleData } from './types';

export const PALETTE = [
  { color: 'bg-teal-500', textColor: 'text-white' },
  { color: 'bg-orange-500', textColor: 'text-white' },
  { color: 'bg-lime-500', textColor: 'text-slate-900' },
  { color: 'bg-emerald-500', textColor: 'text-white' },
  { color: 'bg-cyan-500', textColor: 'text-white' },
  { color: 'bg-sky-500', textColor: 'text-white' },
  { color: 'bg-indigo-500', textColor: 'text-white' },
  { color: 'bg-fuchsia-500', textColor: 'text-white' },
  { color: 'bg-rose-500', textColor: 'text-white' },
];

export const SCHEDULE_DATA: ScheduleData = {
  users: [
    { id: 'user-asher', name: 'Asher\'s Parents', address: '123 Asher St', mapsLink: '#' },
    { id: 'user-charlotte', name: 'Charlotte\'s Parents', address: '456 Charlotte Ave', mapsLink: '#' },
    { id: 'user-lulu', name: 'Lulu\'s Parents', address: '789 Lulu Ln', mapsLink: '#' },
    { id: 'user-luma', name: 'Luma\'s Parents', address: '101 Luma Blvd', mapsLink: '#' },
    { id: 'user-rona', name: 'Rona\'s Parents', address: '212 Rona Rd', mapsLink: '#' },
  ],
  children: [
    { id: 'asher', parentId: 'user-asher', name: 'Asher', dietary: 'Cows milk intolerance', color: 'bg-blue-500', textColor: 'text-white' },
    { id: 'charlotte', parentId: 'user-charlotte', name: 'Charlotte', dietary: 'Celiac / Gluten Free', color: 'bg-pink-500', textColor: 'text-white' },
    { id: 'lulu', parentId: 'user-lulu', name: 'Lulu', dietary: 'None', color: 'bg-yellow-400', textColor: 'text-slate-900' },
    { id: 'luma', parentId: 'user-luma', name: 'Luma', dietary: 'Vegetarian. Eggs & yogurt.', color: 'bg-purple-500', textColor: 'text-white' },
    { id: 'rona', parentId: 'user-rona', name: 'Rona', dietary: 'None', color: 'bg-green-500', textColor: 'text-white' },
  ],
  schedule: [
    {
      title: 'WEEK ONE: 21 - 27 JULY',
      days: [
        { date: 'MONDAY 21 JULY', dayOfWeek: 'Monday', location: 'TADPOLES', time: '', children: [], notes: '', hostId: null },
        { date: 'TUESDAY 22 JULY', dayOfWeek: 'Tuesday', location: 'LAST DAY OF TADPOLES', time: '', children: [], notes: '', hostId: null },
        { date: 'WEDNESDAY 23 JULY', dayOfWeek: 'Wednesday', location: "Lulu's House", time: '9am - 1:30pm', children: ['asher', 'charlotte', 'lulu', 'rona'], notes: 'Luma will be with her friend from Ibiza', hostId: 'user-lulu' },
        { date: 'THURSDAY 24 JULY', dayOfWeek: 'Thursday', location: "Lulu's House", time: '9am - 1:30pm', children: ['asher', 'charlotte', 'lulu', 'rona'], notes: '', hostId: 'user-lulu' },
        { date: 'FRIDAY 25 JULY', dayOfWeek: 'Friday', location: "Charlotte's House", time: '8:45am - 3:30/4pm', children: ['asher', 'charlotte', 'lulu', 'luma', 'rona'], notes: '', hostId: 'user-charlotte' },
      ],
    },
    {
      title: 'WEEK TWO: 28 JULY - 3 AUGUST',
      days: [
        { date: 'MONDAY 28 JULY', dayOfWeek: 'Monday', location: "Asher's House", time: '8:45am - 5pm', children: ['asher', 'lulu', 'rona'], notes: 'Luma on Holiday, Charlotte on Holiday', hostId: 'user-asher' },
        { date: 'TUESDAY 29 JULY', dayOfWeek: 'Tuesday', location: "Rona's House", time: '8:45am - ??', children: ['asher', 'lulu', 'rona'], notes: 'Luma on Holiday, Charlotte on Holiday', hostId: 'user-rona' },
        { date: 'WEDNESDAY 30 JULY', dayOfWeek: 'Wednesday', location: "Lulu's House", time: '9am - 3pm', children: ['asher', 'lulu', 'rona'], notes: 'Luma on Holiday, Charlotte on Holiday', hostId: 'user-lulu' },
        { date: 'THURSDAY 31 JULY', dayOfWeek: 'Thursday', location: '', time: '', children: [], notes: 'Luma on Holiday, Charlotte on Holiday', hostId: null },
        { date: 'FRIDAY 1 AUGUST', dayOfWeek: 'Friday', location: "Rona's House (Mor)", time: '9:00-15:30', children: ['asher', 'lulu', 'rona'], notes: 'Luma on Holiday, Charlotte on Holiday', hostId: 'user-rona' },
      ],
    },
     {
      title: 'WEEK THREE: 4 - 10 AUGUST',
      days: [
        { date: 'MONDAY 4 AUGUST', dayOfWeek: 'Monday', location: "Asher's House", time: '8:45am - 5pm', children: ['asher', 'lulu', 'rona'], notes: 'Luma on Holiday, Charlotte on Holiday', hostId: 'user-asher' },
        { date: 'TUESDAY 5 AUGUST', dayOfWeek: 'Tuesday', location: "Rona's House", time: '8:45am - ??', children: ['asher', 'luma', 'lulu', 'rona'], notes: 'Charlotte on Holiday', hostId: 'user-rona' },
        { date: 'WEDNESDAY 6 AUGUST', dayOfWeek: 'Wednesday', location: "Lulu's House", time: '9am - 3pm', children: ['asher', 'luma', 'lulu', 'rona'], notes: 'Charlotte on Holiday', hostId: 'user-lulu' },
        { date: 'THURSDAY 7 AUGUST', dayOfWeek: 'Thursday', location: "Luma's", time: '8:45am - 3:30pm', children: ['asher', 'luma', 'lulu', 'rona'], notes: 'Charlotte on Holiday', hostId: 'user-luma' },
        { date: 'FRIDAY 8 AUGUST', dayOfWeek: 'Friday', location: "Rona's house (Mor)", time: '8:45-15:30', children: ['asher', 'luma', 'lulu', 'rona'], notes: 'Charlotte on Holiday', hostId: 'user-rona' },
      ],
    },
    {
      title: 'WEEK FOUR: 11 - 17 AUGUST',
      days: [
        { date: 'MONDAY 11 AUGUST', dayOfWeek: 'Monday', location: "Asher's House", time: '8:45am - 5pm', children: ['asher', 'luma', 'rona', 'lulu'], notes: 'Charlotte on Holiday', hostId: 'user-asher' },
        { date: 'TUESDAY 12 AUGUST', dayOfWeek: 'Tuesday', location: '', time: '', children: [], notes: 'Charlotte on Holiday, Lulu on Holiday', hostId: null },
        { date: 'WEDNESDAY 13 AUGUST', dayOfWeek: 'Wednesday', location: '', time: '', children: [], notes: 'Charlotte on Holiday, Lulu on Holiday', hostId: null },
        { date: 'THURSDAY 14 AUGUST', dayOfWeek: 'Thursday', location: "Luma's House", time: '8:45am - 3:30pm', children: ['asher', 'luma'], notes: 'Charlotte on Holiday, Lulu on Holiday, Rona on holiday', hostId: 'user-luma' },
        { date: 'FRIDAY 15 AUGUST', dayOfWeek: 'Friday', location: '', time: '', children: [], notes: 'Charlotte on Holiday, Lulu on Holiday, Rona on holiday', hostId: null },
      ],
    },
    {
      title: 'WEEK FIVE: 18 - 24 AUGUST',
      days: [
        { date: 'MONDAY 18 AUGUST', dayOfWeek: 'Monday', location: '', time: '', children: [], notes: 'Charlotte on Holiday, Lulu on Holiday, Asher on Holiday, Rona on holiday', hostId: null },
        { date: 'TUESDAY 19 AUGUST', dayOfWeek: 'Tuesday', location: '', time: '', children: [], notes: 'Charlotte on Holiday, Lulu on Holiday, Asher on Holiday, Rona on holiday', hostId: null },
        { date: 'WEDNESDAY 20 AUGUST', dayOfWeek: 'Wednesday', location: '', time: '', children: [], notes: 'Lulu on Holiday, Asher on Holiday, Rona on holiday', hostId: null },
        { date: 'THURSDAY 21 AUGUST', dayOfWeek: 'Thursday', location: "Luma's House", time: '8:45am - 3:30pm', children: ['charlotte', 'luma'], notes: 'Lulu on Holiday, Asher on Holiday, Rona on holiday', hostId: 'user-luma' },
        { date: 'FRIDAY 22 AUGUST', dayOfWeek: 'Friday', location: "Charlotte's House", time: '8:45am - 3:30/4pm', children: ['charlotte', 'luma'], notes: 'Lulu on Holiday, Asher on Holiday, Rona on holiday', hostId: 'user-charlotte' },
      ],
    },
    {
      title: 'WEEK SIX: 25 - 31 AUGUST',
      days: [
        { date: 'MONDAY 25 AUGUST', dayOfWeek: 'Monday', location: '', time: '', children: [], notes: 'Lulu on Holiday, Asher on Holiday, Rona on holiday', hostId: null },
        { date: 'TUESDAY 26 AUGUST', dayOfWeek: 'Tuesday', location: "Rona's House", time: '8:45am - ??', children: ['charlotte', 'luma', 'rona'], notes: 'Lulu on Holiday, Asher on Holiday', hostId: 'user-rona' },
        { date: 'WEDNESDAY 27 AUGUST', dayOfWeek: 'Wednesday', location: "Charlotte's House", time: '8:45am - 3:30/4pm', children: ['charlotte', 'luma', 'rona'], notes: 'Lulu on Holiday, Asher on Holiday', hostId: 'user-charlotte' },
        { date: 'THURSDAY 28 AUGUST', dayOfWeek: 'Thursday', location: "Luma's House", time: '8:45am - 3:30pm', children: ['charlotte', 'luma', 'rona'], notes: 'Lulu on Holiday, Asher on Holiday', hostId: 'user-luma' },
        { date: 'FRIDAY 29 AUGUST', dayOfWeek: 'Friday', location: "Rona's house (Mor)", time: '8:45am - 3:30pm', children: ['charlotte', 'luma', 'rona'], notes: 'Lulu on Holiday, Asher on Holiday', hostId: 'user-rona' },
      ],
    },
    {
      title: 'WEEK SEVEN: 1 - 7 SEPTEMBER',
      days: [
        { date: 'MONDAY 1 SEPTEMBER', dayOfWeek: 'Monday', location: "Asher's House", time: '8:45am - 5pm', children: ['asher', 'charlotte', 'luma', 'rona'], notes: 'Lulu on Holiday', hostId: 'user-asher' },
        { date: 'TUESDAY 2 SEPTEMBER', dayOfWeek: 'Tuesday', location: '', time: '', children: [], notes: 'Lulu on Holiday', hostId: null },
        { date: 'WEDNESDAY 3 SEPTEMBER', dayOfWeek: 'Wednesday', location: "Charlotte's House", time: '8:45am - 3:30/4pm', children: ['asher', 'charlotte', 'luma', 'rona', 'lulu'], notes: '', hostId: 'user-charlotte' },
        { date: 'THURSDAY 4 SEPTEMBER', dayOfWeek: 'Thursday', location: "Luma's House (OR can be at Lulu's house)", time: '8:45am - 3:30pm', children: ['asher', 'charlotte', 'luma', 'rona', 'lulu'], notes: '', hostId: 'user-luma' },
        { date: 'FRIDAY 5 SEPTEMBER', dayOfWeek: 'Friday', location: "Rona's house (Mor) (OR can be at Lulu's house)", time: '8:45am - 3:30pm', children: ['asher', 'charlotte', 'luma', 'rona'], notes: '', hostId: 'user-rona' },
      ],
    },
    {
      title: 'WEEK EIGHT: 8 - 14 SEPTEMBER',
      days: [
        { date: 'MONDAY 8 SEPTEMBER', dayOfWeek: 'Monday', location: "Asher's House", time: '8:45am - 5pm', children: ['asher', 'charlotte', 'luma', 'rona', 'lulu'], notes: 'We made it!', hostId: 'user-asher' },
        { date: 'TUESDAY 9 SEPTEMBER', dayOfWeek: 'Tuesday', location: 'FIRST DAY OF FROGLETS!', time: '', children: [], notes: '', hostId: null },
        { date: 'WEDNESDAY 10 SEPTEMBER', dayOfWeek: 'Wednesday', location: 'FROGLETS', time: '', children: [], notes: '', hostId: null },
        { date: 'THURSDAY 11 SEPTEMBER', dayOfWeek: 'Thursday', location: 'FROGLETS', time: '', children: [], notes: '', hostId: null },
        { date: 'FRIDAY 12 SEPTEMBER', dayOfWeek: 'Friday', location: 'FROGLETS', time: '', children: [], notes: '', hostId: null },
      ],
    },
  ],
};