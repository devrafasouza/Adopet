import React, { ChangeEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FiCamera, FiXCircle } from 'react-icons/fi';
import { Container, Content, PostImages } from './styles';

import { useToast } from '../../hooks/toast';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { usePost } from '../../hooks/post';
import api from '../../services/api';

const EditPostImages: React.FC = () => {
  const { postById } = usePost();
  const { addToast } = useToast();

  const history = useHistory();

  const handleUploadImages = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const data = new FormData();
      if (files) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < files.length; i++) {
          data.append('images', files[i]);
        }
        api.post(`/posts/images/${postById?.id}`, data, {
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
    [addToast, postById, history],
  );

  const handleRemoveImage = useCallback(
    (id: string | undefined) => {
      api.delete(`/posts/${postById?.id}/images/${id}`);
    },
    [postById?.id],
  );

  const handleSkipImages = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

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

        <PostImages>
          {postById?.images?.map(image => (
            <div className="edit-images">
              <img src={image.image_url} alt="PostImage" />
              <button
                type="button"
                key={image.id}
                id="delete-image"
                onClick={() => handleRemoveImage(image.id)}
              >
                <FiXCircle size={8} />
              </button>
            </div>
          ))}
        </PostImages>
      </Content>

      <button type="button" id="finish-button" onClick={handleSkipImages}>
        Finalizar
      </button>

      <Footer />
    </Container>
  );
};

export default EditPostImages;
