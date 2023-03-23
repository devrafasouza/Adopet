import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { usePost } from '../../hooks/post';

import IPostDTO from '../../components/Post/dtos/IPostDTO';

import { Container, Content, SelectCategory } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const EditPost: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState('Selecione uma categoria');
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { postById, findById, categories } = usePost();
  const idParam = useParams<{ id: string }>();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IPostDTO) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          phone_number: Yup.string()
            .min(10, 'Número deve conter no mínimo 10 dígitos. Ex: 4387654321')
            .max(11, 'Número deve conter no máximo 11 dígitos. Ex: 43987654321')
            .required('Número de telefone obrigatório'),
          cep: Yup.string().required('CEP obrigatório'),
          city: Yup.string().required('Cidade obrigatória'),
          district: Yup.string().required('Bairro obrigatório'),
          street: Yup.string().required('Rua obrigatória'),
          house_number: Yup.string(),
          category_name: Yup.string().required(
            'Selecione uma categoria abaixo',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(`/posts/edit/${postById?.id}`, data);

        history.push(`/edit-post-images`);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro ao atualizar a postagem',
            description:
              'Ocorreu um erro ao atualizar a postagem, verifique as informações',
          });
        }
      }
    },
    [history, addToast, postById],
  );

  const handleChangeCategory = useCallback((category): HTMLInputElement => {
    const validateCategory = category.target.value;

    setCategoryValue(validateCategory);

    return validateCategory;
  }, []);

  useEffect(() => {
    const { id } = idParam;
    findById(id);
  }, [idParam, findById]);

  return (
    <>
      <Header />

      <Container>
        <h1>Editar Postagem</h1>
        <Content>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="newpost-form"
            key={postById?.id}
          >
            <Input
              name="title"
              placeholder="Título"
              defaultValue={postById?.title}
            />
            <Input
              name="description"
              placeholder="Descrição"
              defaultValue={postById?.description}
            />
            <Input
              name="phone_number"
              placeholder="Telefone"
              defaultValue={postById?.phone_number}
            />
            <Input name="cep" placeholder="CEP" defaultValue={postById?.cep} />
            <Input
              name="city"
              placeholder="Cidade"
              defaultValue={postById?.city}
            />
            <Input
              name="district"
              placeholder="Bairro"
              defaultValue={postById?.district}
            />
            <Input
              name="street"
              placeholder="Rua"
              defaultValue={postById?.street}
            />
            <Input
              name="house_number"
              placeholder="Número (opcional)"
              defaultValue={postById?.house_number}
            />
            <Input
              name="category_name"
              placeholder="Selecione a categoria"
              readOnly
              id="category-input"
              value={categoryValue}
            />

            <SelectCategory>
              <strong>Selecione uma categoria</strong>

              <select
                name="category_name"
                id="categories"
                onChange={e => {
                  handleChangeCategory(e);
                }}
              >
                <option id="Selecione" value="Selecione">
                  Selecione
                </option>

                {categories.map(category => (
                  <option
                    key={category.id}
                    id={category.id}
                    value={category.category_name}
                  >
                    {category.category_name}
                  </option>
                ))}
              </select>
            </SelectCategory>

            <Button type="submit">Próximo</Button>
          </Form>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default EditPost;
