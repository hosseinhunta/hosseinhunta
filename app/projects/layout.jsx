import Footer from "@/components/Footer";

export const metadata = {
  title: "پروژه ها | حسین محمدیان نژاد",
  description:
    "مشاهده پروژه‌های شاخص حسین محمدیان نژاد، مهندس نرم‌افزار و مدیر فنی. از توسعه وب با Next.js  تا هوش مصنوعی، ربات تلگرام، و راه‌حل‌های open source مانند HuntFeed و Hiddify. سیستم‌های مقیاس‌پذیر برای چالش‌های واقعی.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}