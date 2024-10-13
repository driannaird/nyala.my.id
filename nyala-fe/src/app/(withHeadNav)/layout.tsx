import HeaderMobile from "ln/components/sections/header-mobile";
import NavbarMobile from "ln/components/sections/navbar-mobile";

export default async function WithHeadNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderMobile />
      {children}
      <NavbarMobile />
    </>
  );
}
