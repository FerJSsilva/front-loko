import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <button
        onClick={() => navigate('/about')}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Go to About
      </button>
    </div>
  );
}
