import { UserContext } from "./UserContext";
import { useState } from 'react';

/* const user = {
    id: 1,
    name: 'Luciano',
    lastname: 'Lasala'
} */

export const UserProvider = ({ children }) => { // hijos del componente

  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

