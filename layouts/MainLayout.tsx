import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

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
