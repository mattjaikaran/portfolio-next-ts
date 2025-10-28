import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from './button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant="ghost"
      size="icon"
      className="h-9 w-9 relative"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ThemeToggleDropdown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild></DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-background border rounded-lg p-2 shadow-lg">
          <DropdownMenu.Item
            className="flex items-center px-2 py-1.5 hover:bg-accent rounded-md cursor-pointer"
            onClick={() => setTheme('light')}
          >
            <Sun className="h-4 w-4 mr-2" />
            <span>Light</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex items-center px-2 py-1.5 hover:bg-accent rounded-md cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            <Moon className="h-4 w-4 mr-2" />
            <span>Dark</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex items-center px-2 py-1.5 hover:bg-accent rounded-md cursor-pointer"
            onClick={() => setTheme('system')}
          >
            <Laptop className="h-4 w-4 mr-2" />
            <span>System</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
