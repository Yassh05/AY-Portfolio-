import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <p className="footer-logo">YASH SHARMA</p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} All rights reserved. Built with React & ❤️
            </p>
          </div>

          {/* Reference Section */}
          <div className="footer-reference">
            <FileText size={16} className="text-primary" />
            <span>
              This portfolio was built using my{' '}
              <a href="https://yassh05.github.io/PORTFOLIO/" className="footer-link" target="_blank" rel="noopener noreferrer">
                original resume
              </a>{' '}
              as reference
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
