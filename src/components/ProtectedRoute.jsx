import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ element }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const apimainurl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  let token;

  try {
    const tokenString = localStorage.getItem('token');
    token = tokenString ? JSON.parse(tokenString) : null;
  } catch (error) {
    console.error('Error parsing token from localStorage', error);
    token = null;
  }

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || !token.token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${apimainurl}api/auth/user`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [apimainurl, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user?.email ? element : <Navigate to="/signup" />;
};

export default ProtectedRoute;
