import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
import { Container } from './styles';
import logo from '~/assets/M.svg';
import history from '~/services/history';

export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user.profile);

  function handleSignout() {
    dispatch(signOut());
  }

  function handleBack() {
    history.push('/dashboard');
  }

  return (
    <Container>
      <button type="button" onClick={handleBack}>
        <img src={logo} alt="Logo" />
      </button>

      <div>
        <div>
          <span>{name}</span>
          <Link to="/profile">Meu perfil</Link>
        </div>
        <button type="button" onClick={handleSignout}>
          Sair
        </button>
      </div>
    </Container>
  );
}
