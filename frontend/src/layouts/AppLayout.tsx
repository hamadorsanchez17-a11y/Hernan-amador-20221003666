import type { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <header className="border-b border-slate-800">
                <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    <h1 className="text-2xl font-black text-red-500">
                        CINE++
                    </h1>

                    <div className="hidden sm:flex gap-8 text-sm text-slate-300">
                        <a href="#" className="hover:text-red-400">Inicio</a>
                        <a href="#" className="hover:text-red-400">Películas</a>
                        <a href="#" className="hover:text-red-400">Estrenos</a>
                    </div>

                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold">
                        Iniciar sesión
                    </button>

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