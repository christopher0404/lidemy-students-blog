import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../contexts';
import { setAuthToken } from '../../utils';
import { register, getMe } from '../../WebAPI';
import { Form, FormControl, FormLabel, FormInput, FormSubmit, FormSubmitButton, ErrorMessage, TogglePasswordVisibilityButton } from '../../components/Form';
import { ReactComponent as HideIcon } from '../../assets/images/hide.svg';
import { ReactComponent as ShowIcon } from '../../assets/images/show.svg';

const Main = styled.main`
  flex-grow: 1;
`;

function SignUpPage() {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('Lidemy');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [errorMessage, setErrorMessage] = useState();

  const togglePasswordVisibility = () => {
    passwordInputType === 'password' ? setPasswordInputType('text') : setPasswordInputType('password');
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);

    register({ nickname, username, password }).then(data => {
      if (data.ok !== 1) return setErrorMessage(data.message);
      setAuthToken(data.token);

      getMe().then(response => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        history.push('/');
      })
    });
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="nickname">Nickname</FormLabel>
          <FormInput name="nickname" id="nickname" value={nickname} maxLength={32} onChange={(e) => setNickname(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput name="username" id="username" value={username} maxLength={32} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type={passwordInputType} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <TogglePasswordVisibilityButton type="button" aria-label="Show/Hide Password" title="Show/Hide Password" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <ShowIcon /> : <HideIcon />}
          </TogglePasswordVisibilityButton>
        </FormControl>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <FormSubmit>
          <FormSubmitButton>Sign Up</FormSubmitButton>
        </FormSubmit>
      </Form>
    </Main>
  );
}

export default SignUpPage;
