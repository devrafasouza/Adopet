import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import IPostDTO from '../components/Post/dtos/IPostDTO';
import api from '../services/api';

interface PostContextData {
  listCategories(): void;
  categories: ICategoriesDTO[];
  findByLastCreated(): void;
  lastCreated: IPostDTO | undefined;
  findById(id: string): void;
  postById: IPostDTO | undefined;
}

interface ICategoriesDTO {
  id?: string;
  category_name: string;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<ICategoriesDTO[]>([]);
  const [lastCreated, setLastCreated] = useState<IPostDTO>();
  const [postById, setPostById] = useState<IPostDTO>();

  const listCategories = useCallback(async () => {
    await api.get<ICategoriesDTO[]>('/categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  const findByLastCreated = useCallback(async () => {
    const lastPostCreated = await api
      .get('/posts/last-created')
      .then(response => {
        setLastCreated(response.data);
      });

    return lastPostCreated;
  }, []);

  const findById = useCallback(async (id: string) => {
    const findPostById = await api
      .get<IPostDTO>(`/posts/${id}`)
      .then(response => {
        setPostById(response.data);
      });

    return findPostById;
  }, []);

  useEffect(() => {
    listCategories();
  }, [listCategories]);

  return (
    <PostContext.Provider
      value={{
        listCategories,
        categories,
        findByLastCreated,
        lastCreated,
        findById,
        postById,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

function usePost(): PostContextData {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePost must be userd within a PostProvider');
  }

  return context;
}

export { PostProvider, usePost };
