"use client";

import React from "react";
import HeaderPost from "../sections/header-post";
import { useRouter } from "next/navigation";

const HeaderPostClient = () => {
  const router = useRouter();
  return <HeaderPost withButton={false} onClickBack={() => router.push("/")} />;
};

export default HeaderPostClient;
