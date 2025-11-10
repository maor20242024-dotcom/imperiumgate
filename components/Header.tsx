"use client";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { stringRoutes } from "@/lib/routes";
import type { Locale } from "@/lib/routes";
import type { Route } from "next";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const locale = params?.locale || "en";
  const loc: Locale = locale === 'ar' ? 'ar' : 'en';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRtl = loc === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: stringRoutes.projectsIndex(loc) as Route, path: stringRoutes.projectsIndex(loc), label: isRtl ? 'المشاريع' : 'Projects' },
    { href: stringRoutes.developersIndex(loc) as Route, path: stringRoutes.developersIndex(loc), label: isRtl ? 'المطورون' : 'Developers' },
    { href: stringRoutes.about(loc) as Route, path: stringRoutes.about(loc), label: isRtl ? 'من نحن' : 'About' },
    { href: stringRoutes.vision(loc) as Route, path: stringRoutes.vision(loc), label: isRtl ? 'رؤيتنا' : 'Vision' },
    { href: stringRoutes.news(loc) as Route, path: stringRoutes.news(loc), label: isRtl ? 'الأخبار' : 'News' },
    { href: stringRoutes.favorites(loc) as Route, path: stringRoutes.favorites(loc), label: isRtl ? 'المفضلة' : 'Favorites' },
    { href: stringRoutes.ai(loc) as Route, path: stringRoutes.ai(loc), label: isRtl ? 'الذكاء الاصطناعي' : 'AI' },
    { href: stringRoutes.contact(loc) as Route, path: stringRoutes.contact(loc), label: isRtl ? 'تواصل معنا' : 'Contact' },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    // استخدام التوجيه الداخلي بدل إعادة التحميل الكامل
    router.push(newPath as any);
  };

  // دالة للرجوع للصفحة السابقة
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // إذا لم يكن هناك تاريخ، ارجع للصفحة الرئيسية
      router.push(`/${locale}` as any);
    }
  };

  // التحقق مما إذا كانت الصفحة الحالية هي الصفحة الرئيسية
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}>
          
          {/* Logo and Back Button */}
          <div className="flex items-center gap-4">
            {/* Back Button - Show only when not on home page */}
            {!isHomePage && (
              <button
                onClick={handleBack}
                className="flex items-center justify-center w-10 h-10 text-gold hover:text-yellow-300 transition-colors duration-300"
                aria-label={isRtl ? 'رجوع' : 'Back'}
              >
                <svg 
                  className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Logo with Enhanced Animation */}
            <Link href={stringRoutes.home(loc) as Route} className="group flex items-center gap-3">
              <div className="relative">
                {/* Main logo container with improved styling */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#e6c55a] via-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#e6c55a]/40 transition-all duration-500 overflow-hidden border border-[#e6c55a]/20 group-hover:border-[#e6c55a]/40">
                  <img 
                    src="/media/logo.png" 
                    alt="Imperium Gate Logo" 
                    className="w-8 h-8 object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Subtle gold glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e6c55a]/30 to-[#d4af37]/30 rounded-xl blur-md group-hover:blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                {/* Additional outer glow */}
                <div className="absolute inset-0 bg-[#e6c55a]/20 rounded-xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 -z-20 scale-150"></div>
              </div>
              <span className={`${scrolled ? 'text-lg hidden md:block' : 'text-xl block'} font-bold bg-gradient-to-r from-[#e6c55a] via-[#d4af37] to-[#e6c55a] bg-clip-text text-transparent group-hover:from-[#f4d03f] group-hover:via-[#e6c55a] group-hover:to-[#f4d03f] transition-all duration-300 drop-shadow-sm`}>
                Imperium Gate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with Enhanced Styling */}
          <div className={`hidden lg:flex gap-8 ${isRtl ? 'flex-row-reverse font-amiri' : 'font-inter'}`}>
            <div className="flex gap-6">
              {navItems.map((item, index) => (
                <div key={item.path}>
                  <Link 
                    href={item.href}
                    className={`relative group px-3 py-2 font-semibold transition-all duration-300 ${
                      pathname === item.path 
                        ? 'text-gold' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 ${
                      pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Language Toggle and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle Button with Gold Styling */}
            <div>
              <LuxuryButton
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="text-gold border-gold/50 hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                {locale === 'ar' ? 'EN' : 'عربي'}
              </LuxuryButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gold/20">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className={`space-y-4 ${isRtl ? 'text-right font-amiri' : 'text-left font-inter'}`}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                         href={item.href}
                         className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                           pathname === item.path
                             ? 'text-gold bg-gold/10 border border-gold/30'
                             : 'text-white/90 hover:text-white hover:bg-white/5'
                         }`}
                         onClick={() => setMobileMenuOpen(false)}
                       >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
