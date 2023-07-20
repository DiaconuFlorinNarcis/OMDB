import React from 'react';
// Componentes
import { BackButton } from '../components/BackButton';

export const NotFound = () => (
  <div className="notFound">
    <h1 className='title'>404!</h1>
    <h2 className='subtitle'>Page not found!</h2>
    <BackButton />
  </div>
)
