import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineCopyright } from 'react-icons/md'
import ArticleFooter from './ArticleFooter'

export default function Footer() {
  return (
    <footer >
    <main >
      <section >
        <img src="/images/logo_light.png" alt="" />
        <p >
          شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
        </p>

        <div >
          <FaRegHeart style={{ fontSize: "2rem" }} />
          <p>
            تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
            خیابان ماگنولیا بلوک آ117
          </p>
        </div>
        <div >
          <FaRegHeart />
          <p>پیگیری سفارشات : 02188305827</p>
        </div>
        <div >
          <FaRegHeart />
          <p>support [at] set-coffee.com</p>
        </div>
      </section>

      <section>
        <h4>جدیدترین نوشته ها</h4>
        <ArticleFooter
          href={"/article/123"}
          date="۱۷ آبان ۱۴۰۲ "
          comments="بدون دیدگاه"
          img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
          title="افزایش انرژی با پودر قهوه فوری"
        />

        <hr />

        <ArticleFooter
          href={"/article/123"}
          date="۱۷ آبان ۱۴۰۲ "
          comments="بدون دیدگاه"
          img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
          title="افزایش انرژی با پودر قهوه فوری"
        />
      </section>

      <ul >
        <div>
          <h4>منوی فوتر</h4>
          <li>
            <Link href={"/contact-us"}>تماس با ما</Link>
          </li>
          <li>
            <Link href={"/about-us"}>درباره ما </Link>
          </li>
          <li>
            <Link href={"/rules"}>قوانین</Link>
          </li>
        </div>
        <div>
          <h4>دسترسی سریع</h4>
          <li>
            <Link href={"/category"}> فروشگاه </Link>
          </li>
          <li>
            <Link href={"/articles"}> مقالات </Link>
          </li>
          <li>
            <Link href={"/cart"}>سبد خرید</Link>
          </li>
          <li>
            <Link href={"/wishlist"}>علاقه مندی ها</Link>
          </li>
        </div>
      </ul>
      <div >
        <img src="/images/license4.htm" width={76} height={76} alt="" />
        <img src="/images/license1.png" width={85} height={85} alt="" />
        <img src="/images/license3.png" alt="" />
        <img src="/images/license2.svg" width={62} height={95} alt="" />
      </div>
    </main>
    <hr />
    <div className="container">
      <p >
        {" "}
        2023
        <MdOutlineCopyright /> تمام حقوق متعلق است به <strong>
          قهوه ست
        </strong>{" "}
        | طراحی و اجرا <strong>نیلامارکتینگ</strong>
      </p>
    </div>
  </footer>
  )
}
