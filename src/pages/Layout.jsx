// рендеримо навігацію по сторінках а також поточну сторінку
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "../components/Navigation/Navigation";
export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
