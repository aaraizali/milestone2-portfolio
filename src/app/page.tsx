// src/app/page.tsx

'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Main from "@/pages/Main";

export default function Home() {
  const [isDesktop /*, setIsDesktop */] = useState<boolean>(true); // Commented out `setIsDesktop` if not used

  return (
    <>
      <Header isDesktop={isDesktop} />
      <Main />
    </>
  );
}
