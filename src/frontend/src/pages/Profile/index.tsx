import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiCamera, FiMail, FiXCircle } from 'react-icons/fi';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { IUserProfileDTO } from '../../dtos/IUserProfile';

import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
import { usePost } from '../../hooks/post';
import { useToast } from '../../hooks/toast';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AvatarInput,
  PostsContainer,
  PostContent,
} from './styles';

import Post from '../../components/Post';
import Footer from '../../components/Footer';
import IPostDTO from '../../components/Post/dtos/IPostDTO';

const Profile: React.FC = () => {
  const [userPosts, setUserPosts] = useState<IPostDTO[]>([]);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { user, updateUser } = useAuth();
  const { isShown, toggle } = useModal();
  const { findById } = usePost();
  const { addToast } = useToast();

  const listUserPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts/user-posts').then(response => {
      setUserPosts(response.data);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data: IUserProfileDTO) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/users/profile', data);

        updateUser(response.data);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro no perfil',
            description:
              // JSON.stringify(errors),
              'Ocorreu um erro ao tentar alterar o perfil, verifique as informações',
          });
        }
      }
    },
    [history, addToast, updateUser],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  const handleRemovePost = useCallback(
    async (id: string) => {
      await api.delete(`/users/post/${id}`);

      const filteredPosts = userPosts.filter(posts => posts.id !== id);

      setUserPosts(filteredPosts);
    },
    [userPosts],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      listUserPosts();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [listUserPosts]);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Alterar perfil do usuário"
          >
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={{
                name: user.name,
                email: user.email,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Input name="name" icon={FaUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <AvatarInput>
                <label htmlFor="avatar">
                  <FiCamera />
                  <input
                    type="file"
                    id="avatar"
                    onChange={handleAvatarChange}
                  />
                </label>

                <img src={user.avatar_url} alt={user.name} />
              </AvatarInput>

              <Button type="submit">Alterar</Button>
            </Form>
          </Modal>
          <button type="button" id="edit-button" onClick={toggle}>
            Editar perfil
          </button>

          <h1>Minhas postagens</h1>

          <PostsContainer>
            {userPosts.map(post => (
              <PostContent>
                <Post key={post.id} post={post} />
                <a
                  id="edit-post"
                  href={`/posts/${post.id}`}
                  onClick={() => {
                    if (post.id) {
                      findById(post.id);
                    }
                  }}
                >
                  Editar
                </a>
                <button
                  type="button"
                  id="remove-post-button"
                  onClick={() => {
                    if (post.id) {
                      handleRemovePost(post.id);
                    }
                  }}
                >
                  <FiXCircle size={16} />
                </button>
              </PostContent>
            ))}
          </PostsContainer>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default Profile;
