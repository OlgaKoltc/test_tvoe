import Image from "next/image";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={style.container}>
        <div className={style.header_logo}>
          <Image src="/assets/Logo.svg" alt="Logo" width={144} height={50} />
        </div>
        <div className={style.header__search}>
          <input type="text"></input>
          <Image
            src="/assets/icons/Search.svg"
            alt="Search"
            width={25}
            height={25}
          />
        </div>
        <button className={style.header__btn_grad}>7 дней за 0 &#8381;</button>
        <div className={style.box_btn}></div>
      </div>
    </header>
  );
}
