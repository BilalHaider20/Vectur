import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function CareersLayout({ children }) {
  return (
    <section className="bg-blue-dark min-h-screen">
      <section className="container mx-auto px-4 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white md:text-base text-sm font-inter font-semibold tracking-tighter p-2 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out"
          aria-label="Return to homepage"
        >
          <ChevronLeft strokeWidth={2} className="lg:w-6 lg:h-6 h-5 w-5" />
          Back to Home
        </Link>
      </section>
      {children}
    </section>
  );
}