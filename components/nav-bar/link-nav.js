import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LinkNav({ children, href = '', border = 'border-none' }) {
  const router = useRouter();

  return (
    <li className="overflow-hidden flex items-center">
      <Link href={href}>
        <a
          className={`w-8 h-8 ${
            router.pathname === href ? 'text-carbon-800' : 'text-gray-500'
          } rounded-full grid place-items-center ${border} border overflow-hidden`}>
          {children}
        </a>
      </Link>
    </li>
  );
}
