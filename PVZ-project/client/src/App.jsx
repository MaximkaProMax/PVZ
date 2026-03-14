import React, { useState } from 'react';
import './login.css'; // Опционально для стилей

const AuthPage = () => {
  const [email, setEmail] = useState('Maximka@gmail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log('Авторизация:', { email, password, rememberMe });
  };

  const handleForgotPassword = () => {
    // Здесь будет логика восстановления пароля
    console.log('Забыли пароль');
  };

  const handleRegister = () => {
    // Здесь будет логика регистрации
    console.log('Переход к регистрации');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Авторизация</h1>
        <p className="auth-subtitle">Добро пожаловать, введите Ваши данные</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="**********"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Заполните меня</span>
            </label>
            
            <button 
              type="button" 
              onClick={handleForgotPassword}
              className="forgot-password-link"
            >
              Забыли пароль?
            </button>
          </div>

          <button type="submit" className="submit-button">
            Войти
          </button>
        </form>

        <div className="register-section">
          <p className="register-text">
            Нет аккаунта?{' '}
            <button 
              type="button"
              onClick={handleRegister}
              className="register-link"
            >
              Зарегистрируйся
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;