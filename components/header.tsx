import { Mail, Linkedin, FileText } from "lucide-react";
interface HeaderProps {
  name: string;
  title: string;
  email?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
}

const Header = ({ name, title, email, linkedinUrl, resumeUrl }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">{name}</h1>
          <p className="text-sm text-white/70">{title}</p>
        </div>
        <nav className="flex items-center gap-2">
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label="Send email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 shadow-lg transition hover:-translate-y-0.5 hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 shadow-lg transition hover:-translate-y-0.5 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
