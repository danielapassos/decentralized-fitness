import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Decentralized Fitness App</h1>
      <p className="text-lg mb-8 text-center">
        Discover a new way to track your fitness journey, participate in challenges, and earn rewards on the blockchain.
      </p>
      <Link to="/sign-in" className="btn btn-primary">Sign in with MetaMask</Link>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          <li>Track your workouts and progress</li>
          <li>Participate in fitness challenges</li>
          <li>Earn crypto rewards</li>
          <li>Compete with others in the community</li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
