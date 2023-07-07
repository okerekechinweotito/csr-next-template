'use client';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { userDetailsAtom } from '@/store/store';
import useServer from '@/hooks/useServer';

export default function SignUp() {
  const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
  const router = useRouter();
  const { data, error, isLoading, isError } = useServer({
    requestType: 'POST',
    key: 'todo',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    payLoad: userDetails,
  });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      router.push('/');
      return;
    }
    console.log('Error'); // toast popup signup failed
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type='email'
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        placeholder='Email'
        required
      />
      <input
        type='password'
        value={userDetails.password}
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
        placeholder='Password'
        required
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
}
