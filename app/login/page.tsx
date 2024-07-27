"use client"
import React, { useState } from 'react';

type FormType = 'loginUser' | 'loginHotel' | 'signUpUser' | 'signUpHotel';

const LoginPage: React.FC = () => {
  const [formType, setFormType] = useState<FormType>('loginUser');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Form Type: ${formType}`);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login or sign-up logic here
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>{formType.includes('login') ? 'Login' : 'Sign Up'}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button onClick={() => setFormType('loginUser')}>Login as User</button>
        <button onClick={() => setFormType('loginHotel')}>Login as Hotel</button>
        <button onClick={() => setFormType('signUpUser')}>Sign Up as User</button>
        <button onClick={() => setFormType('signUpHotel')}>Sign Up as Hotel</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px' }}>
          {formType.includes('login') ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
