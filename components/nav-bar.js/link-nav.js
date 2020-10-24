import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LinkNav({ children, href = '', border = 'border-none' }) {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a
          className={`w-10 h-10 ${
            router.pathname === href ? 'text-carbon-800' : 'text-gray-500'
          } rounded-full grid place-items-center ${border} border overflow-hidden`}>
          {children}
        </a>
      </Link>
    </li>
  );
}
