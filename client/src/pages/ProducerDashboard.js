import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProducerWelcomeMessage from '../components/ProducerWelcomeMessage';
import ProducerListingStats from '../components/ProducerListingStats';
import ProducerListings from '../components/ProducerListings';

function ProducerDashboard() {
  return (
    <main>
      <NavBar />
      <ProducerWelcomeMessage />
      <ProducerListingStats />
      <ProducerListings />
    </main>
  )
}

export default ProducerDashboard;