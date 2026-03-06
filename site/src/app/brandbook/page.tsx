"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BrandbookIndex() {
  const router = useRouter();
  useEffect(() => { router.replace("/brandbook/a-infraestrutura"); }, [router]);
  return null;
}
