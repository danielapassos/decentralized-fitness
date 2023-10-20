import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connectWallet } from '../utils/connectWallet';

function SignInPage() {
  const history = useHistory();

  const handleSignIn = async () => {
    try {
      await connectWallet();
      history.push('/home');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button onClick={handleSignIn} className="btn btn-primary">
        Sign in with MetaMask
      </button>
    </div>
  );
}

export default SignInPage;
