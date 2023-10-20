async function fetchWorkouts() {
    const response = await fetch('/api/workouts');
    const data = await response.json();
    return data;
  }
  
  export { fetchWorkouts };
  