import Image from "next/image";
import Link from "next/link";
import MyButton from "../MyButton/MyButton";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={style.container}>
        <div className={style.header_logo}>
          <Image src="/assets/Logo.svg" alt="Logo" width={144} height={50} />
        </div>
        <div className={style.header__btn_box}>
          <div className={style.header__search}>
            <input type="text"></input>
            <button className={style.search_btn}></button>
          </div>
          <div className={style.box_btn}>
            <MyButton
              className={style.header__btn_grad}
              text="7 дней за 0 &#8381;"
            />
            <MyButton className={style.header__btn_grey} text="Промокод" />
            <Link className={style.login} href="/#">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
