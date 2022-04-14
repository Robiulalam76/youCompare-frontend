import React from 'react';
import MinimalLayout from '../../../components/Layout/MinimalLayout';
import styles from './autoClaim.module.css'

import Navbar from '../../../components/Layout/Navbar';
import Footer from '../../../components/Layout/Footer';

import ClaimForm from './ClaimForm/ClaimForm';

const AutoClaim = () => {
  const [state, setState] = React.useState({});

  return <MinimalLayout>
    <ClaimForm />
  </MinimalLayout>
}

export default AutoClaim;