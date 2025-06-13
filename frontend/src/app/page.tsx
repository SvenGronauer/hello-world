import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Deploy.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Ship.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Repeat.
          </li>          
          <li className="mb-2 tracking-[-.01em]">
            This bullet point has been added on dev branch.
          </li>            
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <Button asChild>
            <Link href="/hero">Hero Section</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dogs">Meet Dogs</Link>
          </Button>

        </div>
      </main>

    </div>
  );
}
