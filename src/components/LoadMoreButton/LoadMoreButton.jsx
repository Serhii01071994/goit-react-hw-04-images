import { useEffect, useState } from 'react';

export const LoadMoreButton = ({ onLoadMore }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      onLoadMore();
      setIsLoading(false);
    }
  }, [isLoading, onLoadMore]);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <button
      className="button"
      type="button"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};
