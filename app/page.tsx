"use client";

import BestSellers from "@/components/BestSellers";
import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import { useNav } from "@/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import Close from "@/assets/icons/hamclose.svg";

const page = () => {
  return (
    <div>
      <Hero />
      <NewCollections />
      <BestSellers />
    </div>
  );
};

export default page;
