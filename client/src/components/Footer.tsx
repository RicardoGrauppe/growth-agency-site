import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold font-display mb-4">Growth Agency</h3>
            <p className="text-muted-foreground max-w-sm">
              The only growth agency for Brazilian Cleaning & Construction businesses in the USA powered by proprietary technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>Paid Advertising</li>
              <li>CleanOps Software</li>
              <li>Growth Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Growth Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Secure & Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
