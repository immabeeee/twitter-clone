import { Role } from './role.enum';

export interface WebUserUi {
  exp: number;
  iat: number;
  user: UserUi;
}

export interface UserUi {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  role: Role;
}
