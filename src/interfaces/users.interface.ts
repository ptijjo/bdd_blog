/* eslint-disable prettier/prettier */
export interface User {
  id?: string;
  email: string;
  password: string;
  pseudo: string;
  role?: string;
  first_name?: string;
  last_name?: string;
  photo_profil: string;
  created_at: string;
  last_connection?: string;
}
