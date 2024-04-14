import Link from "next/link";

type Props = {
  //children: React.ReactNode;
  text: string;
  href: string;
};

export default function ({ text, href }: Props) {
  return <Link href={href}>{text}</Link>;
}
