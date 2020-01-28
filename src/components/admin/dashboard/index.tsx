import React, { useEffect } from 'react';
import firebase from 'firebase/app';

const AdminDashboard = () => {
  useEffect(() => {
    firebase.database().ref('/projects').once('value').then((snapshot) => {
      console.warn('got ya', snapshot.val());
    });
  }, []);

  return (
    <div className="admin-dashboard-section flex items-center h-screen justify-center flex-col">
      <h1>ADMIN DASHBOARD</h1>
    </div>
  );
};

export default AdminDashboard;
