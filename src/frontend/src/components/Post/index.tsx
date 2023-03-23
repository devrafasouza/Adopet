import React, { useCallback, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import Carousel from 'react-elastic-carousel';

import IPostDTO from './dtos/IPostDTO';
import IPostImagesDTO from './dtos/IPostImagesDTO';
import Modal from '../Modal';

import maskPhone from '../../utils/maskPhone';
import { Container, Content, Footer } from './styles';
import { useModal } from '../../hooks/modal';
import api from '../../services/api';

interface IPostProps {
  post: IPostDTO;
}

const Post: React.FC<IPostProps> = ({ post }: IPostProps) => {
  const [imgArray, setImgArray] = useState<IPostImagesDTO[]>([]);
  const { toggle, isShown } = useModal();

  const getImages = useCallback(() => {
    if (post.images) {
      setImgArray(post.images);
    }
  }, [post.images]);

  const handleReportPost = useCallback(async () => {
    await api.post(`/posts/send-notification/${post.id}`);

    toggle();
  }, [post.id, toggle]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <Container>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Denunciar publicação aos moderadores?"
      >
        <button type="button" onClick={handleReportPost}>
          Denunciar
        </button>
      </Modal>

      <Carousel isRTL className="carousel">
        {imgArray &&
          imgArray?.map(item => (
            <img
              src={item.image_url}
              key={item.id}
              id="post-images"
              alt="Animal"
            />
          ))}
      </Carousel>

      <div className="category-and-report">
        <p className="category">{post.category_name}</p>

        <button type="button" id="report-post-button" onClick={toggle}>
          <FiAlertTriangle size={16} />
        </button>
      </div>

      <Content>
        <div className="description">
          <strong>{post.title}</strong>
          <p>{post.description}</p>
        </div>

        <Footer>
          <strong>Bairro: {post.district}</strong>

          <div className="whatsapp">
            <FaWhatsapp size={24} />
            <a href={`https://wa.me/${post.phone_number}`}>
              {maskPhone(post.phone_number)}
            </a>
          </div>
        </Footer>
      </Content>
    </Container>
  );
};

export default Post;
