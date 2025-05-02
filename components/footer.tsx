import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              href="#home" 
              className="text-xl font-bold"
            >
              Portfolio
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Creating digital experiences through code and design, focused on user-centered solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialLink href="https://github.com" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="mailto:contact@example.com" icon={<Mail size={18} />} label="Email" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
};

export default Footer;