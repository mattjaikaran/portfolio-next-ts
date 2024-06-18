import Navbar from '@/components/shared/navbar';
import { ThemeProvider } from '@/components/shared/theme-provider';

export function MainLayout({ children, ...props }: any) {
  return (
    <div {...props}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
      </ThemeProvider>
    </div>
  );
}
