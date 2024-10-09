import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}