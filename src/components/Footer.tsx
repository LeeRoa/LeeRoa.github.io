export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          
          <p className="text-slate-500 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
