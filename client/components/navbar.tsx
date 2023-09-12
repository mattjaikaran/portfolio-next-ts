import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { buttonVariants } from './ui/button';
import { Icons } from './icons';
import { ThemeToggle } from './theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
}

export default function Navbar({
  className,
  items,
  ...props
}: {
  className?: string;
  items?: MainNavProps;
  props?: string;
}) {
  const router = useRouter();
  return (
    <nav
      className={cn(
        'flex items-center py-2 md:py-4 container space-x-4 lg:space-x-6',
        className
      )}
      {...props}
    >
      <Link href="/" className="flex items-center space-x-2 mr-auto">
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <div className="inline md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            {siteConfig.mainNav?.map(item => (
              <>
                <DropdownMenuLabel
                  key={item.href}
                  className="hover:cursor-pointer"
                  onClick={() => router.push(item.href)}
                >
                  {item.title}
                </DropdownMenuLabel>
              </>

              // item.href && (
              //   <Link
              //     key={index}
              //     href={item.href}
              //     className={cn(
              //       'flex items-center text-sm font-medium text-muted-foreground'
              //     )}
              //   >
              //     {item.title}
              //   </Link>
              // )
            ))}
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.linkedin className="h-5 w-5 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.github className="h-5 w-5 fill-current" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {siteConfig.mainNav?.length ? (
        <nav className="hidden md:flex gap-6">
          {siteConfig.mainNav?.map(
            item =>
              item.href && (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}

      <Link
        className="hidden md:flex"
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.github className="h-5 w-5 " />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link
        className="hidden md:flex"
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.linkedin className="h-5 w-5 " />
          <span className="sr-only">LinkedIn</span>
        </div>
      </Link>

      <Link
        className="hidden md:flex"
        href={siteConfig.links.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.instagram className="h-5 w-5 " />
          <span className="sr-only">Instagram</span>
        </div>
      </Link>
      <ThemeToggle />
    </nav>
  );
}
