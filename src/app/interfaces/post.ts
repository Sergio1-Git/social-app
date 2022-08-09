export interface Post {
  id?: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  iframe?: string;
  fecha: string;
  updated_at?: Date;
  slug?: string;
}

export interface CreatePostDTO extends Omit<Post, 'id'>{
  
}

export interface UpdatePostDTO  extends Partial<CreatePostDTO>{

}