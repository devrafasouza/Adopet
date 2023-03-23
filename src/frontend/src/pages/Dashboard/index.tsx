import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import petBackgroundImg from '../../assets/pet-dashboard-background-2.png';

import { Container, Content, Welcome, LastPosts } from './styles';

import Post from '../../components/Post';
import IPostDTO from '../../components/Post/dtos/IPostDTO';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [lastPosts, setLastPosts] = useState<IPostDTO[]>([]);

  const listLastPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts/last').then(response => {
      setLastPosts(response.data);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      listLastPosts();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [listLastPosts]);

  return (
    <Container>
      <Header />

      <Content>
        <Welcome>
          <h1>
            Seja bem vindo!
            <br />
            Sua felicidade está aqui! Adote um companheiro!
          </h1>

          <h2>Últimas postagens</h2>

          <img src={petBackgroundImg} alt="Animals Background" />

          <LastPosts>
            {lastPosts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </LastPosts>
        </Welcome>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
