import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ConsumerWelcomeMessage from '../components/ConsumerWelcomeMessage';
import ConsumerListingStats from '../components/ConsumerListingStats';

function ConsumerDashboard() {
  return (
    <main>
      <NavBar />
      <ConsumerWelcomeMessage />
      <ConsumerListingStats />
    </main>
  )
}

export default ConsumerDashboard;