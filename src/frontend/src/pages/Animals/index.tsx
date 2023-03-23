import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { usePost } from '../../hooks/post';

import Header from '../../components/Header';
import Post from '../../components/Post';

import { Container, Content, Filter, AllPosts } from './styles';
import IPostDTO from '../../components/Post/dtos/IPostDTO';
import Footer from '../../components/Footer';
import api from '../../services/api';

const Animals: React.FC = () => {
  const [allPosts, setAllPosts] = useState<IPostDTO[]>([]);
  const { categories } = usePost();
  const [filterByCategory, setFilterByCategory] = useState('Selecione');

  const listAllPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts').then(response => {
      setAllPosts(response.data);
    });
  }, []);

  const handleChangeCategory = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      setFilterByCategory(e.target.value);
    },
    [],
  );

  const getFilteredList = useCallback(() => {
    if (filterByCategory === 'Selecione') {
      return allPosts;
    }

    return allPosts.filter(post => post.category_name === filterByCategory);
  }, [allPosts, filterByCategory]);

  const filteredList: IPostDTO[] = useMemo(() => {
    const filtered = getFilteredList();

    return filtered;
  }, [getFilteredList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      listAllPosts();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [listAllPosts]);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <h1>Postagens</h1>
          <Filter>
            <h3>Filtrar por categoria</h3>
            <select
              id="categories"
              defaultValue={filterByCategory}
              onChange={e => handleChangeCategory(e)}
            >
              <option key="selecione" value="Selecione">
                Selecione
              </option>

              {categories.map(cat => (
                <option key={cat.category_name} value={cat.category_name}>
                  {cat.category_name}
                </option>
              ))}
            </select>
          </Filter>
          <AllPosts>
            {filteredList.map(element => (
              <Post key={element.id} post={element} />
            ))}
          </AllPosts>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default Animals;
