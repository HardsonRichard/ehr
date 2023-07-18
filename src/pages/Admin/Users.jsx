import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', role: 'Receptionist', status: 'Active' },
    { id: 2, name: 'User 2', role: 'Doctor', status: 'Active' },
    { id: 3, name: 'User 3', role: 'Lab Technician', status: 'Locked' },
    { id: 4, name: 'User 4', role: 'Pharmacist', status: 'Active' },
  ]);

  const [roleCounts, setRoleCounts] = useState({
    Receptionist: 1,
    Doctor: 1,
    'Lab Technician': 1,
    Pharmacist: 1,
  });

  const handleRemoveUser = (userId, role) => {
    setUsers(users.filter(user => user.id !== userId));
    setRoleCounts(prevCounts => ({ ...prevCounts, [role]: prevCounts[role] - 1 }));
  };

  const handleLockUser = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, status: 'Locked' } : user));
  };

  const userStatusColors = {
    Active: 'bg-green-500',
    Locked: 'bg-red-500',
  };

  const renderUserCards = () => {
    return (
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <div className="p-4 rounded-lg bg-blue-500 text-white">
            <h3 className="text-lg font-semibold mb-2">Receptionists</h3>
            <p className="text-3xl">{roleCounts.Receptionist}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <div className="p-4 rounded-lg bg-yellow-500 text-white">
            <h3 className="text-lg font-semibold mb-2">Doctors</h3>
            <p className="text-3xl">{roleCounts.Doctor}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <div className="p-4 rounded-lg bg-pink-500 text-white">
            <h3 className="text-lg font-semibold mb-2">Lab Technicians</h3>
            <p className="text-3xl">{roleCounts['Lab Technician']}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <div className="p-4 rounded-lg bg-purple-500 text-white">
            <h3 className="text-lg font-semibold mb-2">Pharmacists</h3>
            <p className="text-3xl">{roleCounts.Pharmacist}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderUserTable = () => {
    return (
      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className={`py-2 px-4 border-b ${userStatusColors[user.status]}`}>{user.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleRemoveUser(user.id, user.role)}
                >
                  Remove
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleLockUser(user.id)}
                >
                  Lock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      {renderUserCards()}
      {renderUserTable()}
    </div>
  );
};

export default Users;

