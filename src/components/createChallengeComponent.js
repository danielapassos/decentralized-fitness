import { createChallenge } from '../utils/blockchain';

async function handleCreateChallenge(challengeDetails) {
  try {
    await createChallenge(challengeDetails);
  } catch (error) {
    console.error('Failed to create challenge:', error);
  }
}
