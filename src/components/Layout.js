import BackgroundPattern from '@/components/BackgroundPattern';
import Footer from '@/components/Footer';

export default function Layout({ children, isDark, setIsDark, hideKylo }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:text-gray-50 text-gray-500 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 overflow-hidden">
      <div className="relative p-1 w-full min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 sm:p-2">
        <div className="flex flex-col justify-between p-4 min-h-screen bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:p-8">
          <main className="prose md:prose-lg lg:prose-xl z-10 mx-auto w-full max-w-5xl">
            {children}
          </main>
          <BackgroundPattern className="top-20 sm:top-40" />
          <Footer isDark={isDark} setIsDark={setIsDark} hideKylo={hideKylo} />
        </div>
      </div>
    </div>
  );
}
