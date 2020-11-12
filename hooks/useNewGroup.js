import { useState } from 'react';

function useNewGroup() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const newGroup = async () => {};

  return [newGroup, loading, error];
}

export default useNewGroup;
