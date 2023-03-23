import React, { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          passwordConfirmation: Yup.string()
            .nullable()
            .oneOf([Yup.ref('password'), null], 'Senhas não coincidem'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, passwordConfirmation } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          passwordConfirmation,
          token,
        });

        addToast({
          type: 'success',
          title: 'Senha alterada',
          description: 'Sua senha foi alterada com sucesso',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro ao alterar a senha',
            description:
              'Ocorreu um erro ao tentar realizar a alteração de senha, tente novamente.',
          });

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao alterar a senha',
          description:
            'Ocorreu um erro ao tentar realizar a alteração de senha, tente novamente.',
        });
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="AdopetCP" />

          <Form ref={formRef} onSubmit={handleSubmit} className="form">
            <h1>Alterar senha</h1>

            <Input name="password" icon={FiLock} placeholder="Nova senha" />

            <Input
              name="passwordConfirmation"
              icon={FiLock}
              placeholder="Confirmação da senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ResetPassword;
