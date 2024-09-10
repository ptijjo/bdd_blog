/* eslint-disable prettier/prettier */
export interface Commentaire {
  id?: string;
  message: string;
  created_at: string;
  updated_at?: string;
  articleId: string;
  posterId: string;
}
