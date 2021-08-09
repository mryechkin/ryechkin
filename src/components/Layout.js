import Footer from '@/components/Footer';

export default function Layout({ children, isDark, setIsDark, hideKylo }) {
  return (
    <div className="absolute p-1 w-full min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 sm:p-2">
      <div className="min-h-[99vh] relative flex flex-col justify-around bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
        <main className="dark:bg-pattern-dark bg-pattern-light prose md:prose-md lg:prose-lg xl:prose-xl z-10 mx-auto px-2 max-w-5xl bg-auto bg-left-top bg-no-repeat overflow-hidden sm:px-4 md:px-8">
          {children}
        </main>
        <Footer isDark={isDark} setIsDark={setIsDark} hideKylo={hideKylo} />
      </div>
    </div>
  );
}
