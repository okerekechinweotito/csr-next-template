import Link from 'next/link';

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Link href='/login'>Go to Login</Link>
    </div>
  );
}
