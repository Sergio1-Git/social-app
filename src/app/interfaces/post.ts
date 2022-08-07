export interface Post {
  id?: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  iframe?: string;
  created_at: Date;
  updated_at?: Date;
  slug?: string;
}
