import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xl font-semibold tracking-tight hover:text-[#FF6B35] transition-colors"
              >
                BulletPoint<span className="text-[#FF6B35]">.VC</span>
              </button>
              <span className="hidden md:block text-white/30">|</span>
              <span className="text-sm text-white/50">
                © {currentYear} BulletPoint.VC. All rights reserved.
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-sm text-white/50 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy coming soon');
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-white/50 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms of Service coming soon');
                }}
              >
                Terms of Service
              </a>
              <div className="flex items-center gap-3 ml-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35]/20 hover:text-[#FF6B35] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35]/20 hover:text-[#FF6B35] transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:vlad@bulletpoint.vc"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35]/20 hover:text-[#FF6B35] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
