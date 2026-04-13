'use client';
import { getFavoriteProducts } from '@/src/shared/api/instance.api';
import { useQuery } from '@tanstack/react-query';

const Favorite = () => {
  const { data } = useQuery<any>({
    queryKey: ['posts'],
    queryFn: getFavoriteProducts
  });

  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>
          <img src={post.image} alt="" />
          <li key={post.id}>{post.title}</li>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
