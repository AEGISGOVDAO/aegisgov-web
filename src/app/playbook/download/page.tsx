import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlaybookContent from "./PlaybookContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The AI GovCon Playbook | Aegis Gov DAO",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ token?: string }>;
}

export default async function PlaybookDownloadPage({ searchParams }: Props) {
  const params = await searchParams;
  const token = params.token;
  const validToken = process.env.PLAYBOOK_DOWNLOAD_TOKEN;

  if (!token || token !== validToken) {
    notFound();
  }

  return <PlaybookContent />;
}
