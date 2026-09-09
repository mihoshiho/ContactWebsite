import Image from "next/image";
import { Github, Facebook, Twitter, Mail } from "@mynaui/icons-react";

const ICON = "h-6 w-6";

// ponytail: no Discord glyph in Myna UI set, inline currentColor SVG to match icon style
function Discord({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.88-1.5.07.07 0 0 0-.08.04c-.21.37-.44.86-.61 1.24a18.3 18.3 0 0 0-5.5 0 12 12 0 0 0-.62-1.24.08.08 0 0 0-.08-.04c-1.7.29-3.33.8-4.88 1.5a.07.07 0 0 0-.03.03C1.24 8.57.48 12.63.85 16.64a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1 0-.13c.13-.09.25-.19.37-.28a.08.08 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.08.08 0 0 1 .08.01c.12.1.24.19.37.28a.08.08 0 0 1 0 .13 12 12 0 0 1-1.87.9.08.08 0 0 0-.04.11c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.44-4.63-.74-8.66-3.13-12.24a.06.06 0 0 0-.03-.03ZM8.68 14.2c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.17 1.1 2.15 2.42 0 1.34-.95 2.42-2.15 2.42Zm6.66 0c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.17 1.1 2.15 2.42 0 1.34-.94 2.42-2.15 2.42Z" />
    </svg>
  );
}

// ponytail: seeded per-render random, fine for pure decoration (no hydration diffing on a server component)
const PETAL_EMOJI = ["🌸", "✨", "💗"];
const petals = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  emoji: PETAL_EMOJI[i % PETAL_EMOJI.length],
  left: Math.random() * 100,
  size: 12 + Math.random() * 14,
  duration: 8 + Math.random() * 8,
  delay: Math.random() * -16,
  drift: Math.random() * 80 - 40,
}));

const links = [
  {
    name: "GitHub",
    href: "https://github.com/mihoshiho",
    icon: <Github className={ICON} />,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/232045489934172160",
    icon: <Discord className={ICON} />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100013229341102",
    icon: <Facebook className={ICON} />,
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/ShihoFox",
    icon: <Twitter className={ICON} />,
  },
  {
    name: "Email",
    href: "mailto:mihoshiho1@gmail.com",
    icon: <Mail className={ICON} />,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#FFF6F8] px-4 py-10 text-[#5c3a44]">
      <div className="pointer-events-none fixed inset-0 z-0">
        {petals.map((p) => (
          <span
            key={p.id}
            className="petal"
            style={{
              left: `${p.left}%`,
              fontSize: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}px`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        <Image
          src="https://capsule-render.vercel.app/api?type=waving&color=FFB7C5&height=160&section=header&text=Hi,%20I'm%20Shiho%20%F0%9F%8C%B8&fontSize=36&fontColor=ffffff&animation=fadeIn"
          alt=""
          width={800}
          height={160}
          unoptimized
          priority
          className="w-full max-w-sm rounded-2xl"
        />

        <div className="mt-6 flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl bg-black/40 px-5 py-8">
          <Image
            src="https://github.com/mihoshiho.png"
            alt="Shiho"
            width={96}
            height={96}
            unoptimized
            className="float-bob h-24 w-24 rounded-full border-4 border-white shadow-[0_0_0_6px_rgba(255,183,197,0.5)]"
          />

          <div className="text-center">
            <h1 className="wiggle-hover inline-block text-2xl font-semibold tracking-tight text-white">
              🦊 @Shiho
            </h1>
            <p className="mt-1 text-sm text-[#ffd9e2]">
              a curious fox exploring the world of web dev
            </p>
          </div>

          <ul className="flex w-full flex-col gap-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#FFD3DC] bg-white px-5 py-3.5 font-medium shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#FFB7C5] hover:bg-[#FFF0F3] hover:shadow-md active:scale-95 active:duration-75"
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-base font-medium text-[#e6a3b3]">
          🌸･｡*ﾟ~ thanks for stopping by ~*ﾟ｡･🌸
        </p>
      </div>
    </div>
  );
}
