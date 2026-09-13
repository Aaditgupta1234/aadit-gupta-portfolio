export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-serif text-lg text-text-primary mb-1">Aadit Gupta</p>
        <p className="text-sm text-text-secondary">
          Building better systems, one commit at a time.
        </p>
        <p className="text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Aadit Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
