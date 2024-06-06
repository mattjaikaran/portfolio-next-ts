import Link from 'next/link';
import { ReactElement } from 'react';
import { Icons } from './icons';

export default function BackButton({ route }: { route: string }): ReactElement {
  return (
    <Link href={`/${route}`}>
      <Icons.undo className="h-5 w-5 inline mr-2" />
      <small>Back to {route.charAt(0).toUpperCase() + route.slice(1)}</small>
    </Link>
  );
}
