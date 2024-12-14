import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const authStore = create(
  persist(
    (set) => ({
      users: [],  
      loggedInUser: null, 
      loggedIn: false,
      error: null,

       signup: (userdata) =>
        set((state) => {
 
          const userExists = state.users.some((user) => user.email === userdata.email);
          if (userExists) {
            return { signupError: 'User already exists' };
          }
          return {
            users: [...state.users, userdata], 
            loggedInUser: userdata, 
            loggedIn: true,
            error: null,
          };
        }),

 
      login: (loginData) =>
        set((state) => {
          const user = state.users.find(
            (u) => u.email === loginData.email && u.password === loginData.password
          );
          if (user) {
            return { loggedInUser: user, loggedIn: true, error: null };
          }
          return { loggedIn: false, error: 'Invalid email or password' };
        }),

     
      logout: () =>
        set(() => ({
          loggedInUser: null,
          loggedIn: false,
          error: null,
        })),
    }),
    {
      name: 'auth-storage',  
      partialize: (state) => ({
        users: state.users,
        loggedInUser: state.loggedInUser,
        loggedIn: state.loggedIn,
      }),  
    }
  )
);
