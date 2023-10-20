import supabase from './db'; 

// Subscribe to live updates of workout data
function subscribeToWorkouts(callback) {
  supabase
    .from('workouts')
    .on('*', payload => {
      callback(payload);
    })
    .subscribe();
}

export { subscribeToWorkouts };
