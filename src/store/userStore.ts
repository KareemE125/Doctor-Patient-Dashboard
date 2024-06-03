import { User } from '@models/UserModel'
import { create } from 'zustand'

interface UserState {
  user: User;
  isLoading: boolean;
  error: string | null;
  setuser: (user: User) => void
}

const initailUserState: User = {
    id: 0,
    name: 'Dr. Jose Simmons',
    email: 'jose@test.com',
    profession: 'General Practitioner',
    avatar: 'https://img.freepik.com/free-photo/portrait-male-health-worker_23-2148980804.jpg'
}


const useUserStore = create<UserState>()((set) => (
    {
        user: initailUserState,
        isLoading: false,
        error: null,
        setuser: (user) => set(() => ({ user: user })),
    }
))

export default useUserStore