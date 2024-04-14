"use client";
import Link from "next/link";
import Image from "next/image";
import Links from "../Links/Links";
import MyButton from "../MyButton/MyButton";
import style from "./footer.module.scss";
import { usePathname } from "next/navigation";

export default function Footer() {
  const navbarItems = [
    {
      label: "Главная",
      href: "/",
      image: {
        path: "/assets/icons/Home.svg",
        alt: "icon",
        width: 18,
        height: 20,
      },
    },
    {
      label: "Фильмы",
      href: "/filmy",
      image: {
        path: "/assets/icons/Movie.svg",
        alt: "icon",
        width: 18,
        height: 20,
      },
    },
    {
      label: "Сериалы",
      href: "/series",
      image: {
        path: "/assets/icons/Series.svg",
        alt: "icon",
        width: 18,
        height: 20,
      },
    },
    {
      label: "TV каналы",
      href: "/channels",
      image: {
        path: "/assets/icons/TV.svg",
        alt: "icon",
        width: 18,
        height: 20,
      },
    },
    {
      label: "Моё",
      href: "/my",
      image: {
        path: "/assets/icons/My.svg",
        alt: "icon",
        width: 18,
        height: 20,
      },
    },
  ];

  const pathname = usePathname();

  return (
    <footer>
      <div className={style.container}>
        <div className={style.box_btn}>
          <MyButton
            text="Написать в поддержку"
            className={style.btn_help}
          ></MyButton>
          <div className={style.box_social}>
            <span>
              <button>
                Youtube
                <Image
                  src="/assets/icons/YT.svg"
                  width={16.68}
                  height={11.68}
                  alt="icon"
                />
              </button>
            </span>
            <span>
              <button>
                ВКонтакте
                <Image
                  src="/assets/icons/VK.svg"
                  width={20.04}
                  height={11.9}
                  alt="icon"
                />
              </button>
            </span>
            <span>
              <button>
                Telegram
                <Image
                  src="/assets/icons/tgm.svg"
                  width={16.69}
                  height={14}
                  alt="icon"
                />
              </button>
            </span>
          </div>
        </div>
        <div className={style.links}>
          <div className={style.links__item}>
            <Links href={"/#"} text="Контакты" />
            <Links href={"/#"} text="Реферальная программа" />
            <Links href={"/#"} text="Скачать приложение" />
            <Links href={"/#"} text="Вопросы и ответы" />
            <Links href={"/#"} text="Условия использования" />
          </div>
          <div className={style.line}></div>
        </div>
        <div className={style.info}>
          <div className={style.name}>
            2023, ООО «ТВОЁ ЛАЙВ» 18+ ИНН 7720904034
          </div>
          <div className={style.footer_logo}>
            <Image
              src="/assets/LogoGrey.png"
              alt="Logo"
              width={144}
              height={50}
            />
          </div>
        </div>
        <ul className={style.navbar}>
          {navbarItems.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label} className={style.navbar__item}>
                <Link href={link.href} className={isActive ? "active" : ""}>
                  <Image
                    src={link.image.path}
                    alt={link.image.alt}
                    width={link.image.width}
                    height={link.image.height}
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
