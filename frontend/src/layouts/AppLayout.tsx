
import type { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <header className="border-b border-slate-800">
                <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center">

                    <h1 className="text-2xl font-black text-red-500">
                        CINE++
                    </h1>

                </nav>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">
                {children}
            </main>

            <footer className="border-t border-slate-800 text-center py-6 text-slate-500 text-sm">
                © 2026 Cine++ | Tu experiencia cinematográfica
            </footer>

        </div>
    );
}

export default AppLayout;
