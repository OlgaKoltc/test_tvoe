import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/">Главная</Link>
      <Link href="/movies">Фильмы</Link>
      <Link href="/series">Сериалы</Link>
      <Link href="/channels">ТВ каналы</Link>
      <Link href="/my">Моё</Link>
    </footer>
  );
}
