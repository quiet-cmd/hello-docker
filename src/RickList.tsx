import React, { useEffect, useState } from 'react';

interface Rick {
  name: string;
}

const RickList: React.FC = () => {
  const [ricks, setRicks] = useState<Rick[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRicks = async () => {
      try {
        const response = await fetch('/api/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && Array.isArray(data.results)) {
          setRicks(data.results);
        } else {
          setError('Invalid data format from server.');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRicks();
  }, []);

  if (loading) {
    return <div>Loading Ricks...</div>;
  }

  if (error) {
    return <div>Error loading Ricks: {error}</div>;
  }

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      <ul>
        {ricks.map((rick, index) => (
          <li key={index}>{rick.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RickList; 