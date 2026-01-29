import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Applications", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "API & Integrations", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#solutions" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Zhiyuan
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Software development that scales. Web, mobile, APIs, and consulting.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-semibold text-white">{heading}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Zhiyuan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:hello@zhiyuan.dev" className="text-sm hover:text-white transition-colors">
              hello@zhiyuan.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
