import Footer from "@/components/Footer";

export const metadata = {
  title: "درباره من | حسین محمدیان نژاد",
  description:
    "حسین محمدیان نژاد، مهندس نرم‌افزار و معمار سیستم‌های مقیاس‌پذیر. متخصص در تلاقی توسعه نرم‌افزار، شبکه و هوش مصنوعی. مدیر فنی با تجربه در طراحی سیستم‌های امن و هوشمند",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
