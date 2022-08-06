export interface Post {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  iframe?: string;
  created_at: string;
  updated_at: string;
  slug?: string;
}
