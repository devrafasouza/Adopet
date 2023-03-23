import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';
import { Container, Content } from './styles';

import { useToast } from '../../hooks/toast';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { usePost } from '../../hooks/post';
import api from '../../services/api';

const PostImages: React.FC = () => {
  const { findByLastCreated, lastCreated } = usePost();
  const { addToast } = useToast();

  const history = useHistory();

  const handleUploadImages = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const data = new FormData();

      if (files) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < files.length; i++) {
          data.append('images', files[i]);
        }

        await api.post(`/posts/images/${lastCreated?.id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        history.push('/profile');

        addToast({
          type: 'success',
          title: 'Postagem realizada com sucesso',
        });
      }
    },
    [addToast, lastCreated, history],
  );

  const handleSkipImages = useCallback(() => {
    history.push('/profile');
  }, [history]);

  useEffect(() => {
    const timer = setTimeout(() => {
      findByLastCreated();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [findByLastCreated]);

  return (
    <Container>
      <Header />

      <h1>Selecione as Imagens</h1>

      <Content>
        <label htmlFor="images">
          <FiCamera />
          <input
            type="file"
            id="images"
            multiple
            onChange={handleUploadImages}
          />
        </label>
      </Content>

      <button type="button" onClick={handleSkipImages}>
        Postar sem Imagem
      </button>

      <Footer />
    </Container>
  );
};

export default PostImages;
