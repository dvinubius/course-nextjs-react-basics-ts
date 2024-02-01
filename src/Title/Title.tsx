import React from 'react'
import './Title.css'

interface TitleProps {
  message?: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  
  const message = props.message ?? 'Welcome to React';

  return (
    <div className='title'>{message}</div>
  );
}

export default Title