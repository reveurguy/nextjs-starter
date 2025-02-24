'use client';
import { useEffect } from 'react';
import { Grid } from '../lib/grid';
import { preloadImages } from '../lib/utils';

export default function Home() {
  useEffect(() => {
    // Ensure the grid element exists in the DOM before initializing:
    const gridElem = document.querySelector('.grid--large');
    if (gridElem) {
      new Grid(gridElem);
    }
    // Preload images and remove a loading class when done.
    preloadImages('.grid__cell-img-inner, .slide-nav__img').then(() =>
      document.body.classList.remove('loading')
    );
  }, []);

  return (
    // <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
    //   <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
    //     <Image
    //       className="invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
    //       <li className="mb-2">
    //         Get started by editing{' '}
    //         <code className="rounded bg-white/[.1] px-1 py-0.5 font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex flex-col items-center gap-4 sm:flex-row">
    //       <a
    //         className="group flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-primary px-4 text-sm text-background transition-colors hover:bg-[#ccc] hover:text-black sm:h-12 sm:px-5 sm:text-base"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer">
    //         <Image
    //           className="group-hover:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] hover:text-black sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer">
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <>
      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Grid Zoom | Codrops</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="Codrops" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/jyi8res.css" />
      <link rel="stylesheet" type="text/css" href="css/base.css" /> */}
      <main>
        <div className="grid--large grid">
          <div className="grid__cell grid__cell-c4-r2 grid__cell--padded">
            <div className="frame">
              <h1 className="frame__title oh">
                <span className="oh__inner">Grid Zoom Effect</span>
              </h1>
              <nav className="frame__links">
                <a href="" className="oh">
                  <span className="oh__inner">Article</span>
                </a>
                <a
                  href="https://tympanus.net/Development/ParanoiaSlideshow/"
                  className="oh">
                  <span className="oh__inner">Previous demo</span>
                </a>
                <a href="https://github.com/codrops/GridZoom/" className="oh">
                  <span className="oh__inner">GitHub</span>
                </a>
              </nav>
            </div>
          </div>
          <div className="grid__cell grid__cell-c2-r2 grid__cell--padded">
            <a href="https://twitter.com/codrops" className="oh">
              <span className="oh__inner">@codrops</span>
            </a>
          </div>
          <div className="grid__cell grid__cell-c1-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/1.jpg)' }}
                data-item="item-1"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/2.jpg)' }}
                data-item="item-2"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c4-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/3.jpg)' }}
                data-item="item-3"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c1-r2">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/4.jpg)' }}
                data-item="item-4"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r2">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/5.jpg)' }}
                data-item="item-5"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c2-r3">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/6.jpg)' }}
                data-item="item-6"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c4-r3">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/7.jpg)' }}
                data-item="item-7"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c1-r4">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/8.jpg)' }}
                data-item="item-8"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r4">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/9.jpg)' }}
                data-item="item-9"
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r5">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: 'url(img/10.jpg)' }}
                data-item="item-10"
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__item" id="item-1">
            <span className="content__item-number oh">
              <span className="oh__inner">01</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Masses</span>
            </h2>
            <p className="content__item-text">
              The instruments by which public opinion is organized and focused
              may be misused. But such organization and focusing are necessary
              to orderly life.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/11.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/12.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-2">
            <span className="content__item-number oh">
              <span className="oh__inner">02</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Invisible</span>
            </h2>
            <p className="content__item-text">
              As civilization has become more complex, and as the need for
              invisible government has been increas ingly demonstrated, the
              technical means have been invented and developed by which opinion
              may be regimented.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/13.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/14.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-3">
            <span className="content__item-number oh">
              <span className="oh__inner">03</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Expense</span>
            </h2>
            <p className="content__item-text">
              The invisible government tends to be concentrated in the hands of
              the few because of the expense of manipulating the social
              machinery which controls the opinions and habits of the masses.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/15.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/16.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-4">
            <span className="content__item-number oh">
              <span className="oh__inner">04</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Mechanism</span>
            </h2>
            <p className="content__item-text">
              No matter how sophisticated, how cynical the public may become
              about publicity methods, it must respond to the basic appeals,
              because it will always need food, crave amusement, long for
              beauty, respond to leadership.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/17.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/18.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-5">
            <span className="content__item-number oh">
              <span className="oh__inner">05</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Millions</span>
            </h2>
            <p className="content__item-text">
              This practice of creating circumstances and of creating pictures
              in the minds of millions of persons is very common.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/19.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/20.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-6">
            <span className="content__item-number oh">
              <span className="oh__inner">06</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Continuous</span>
            </h2>
            <p className="content__item-text">
              The important thing is that it is universal and continuous; and in
              its sum total it is regimenting the public mind every bit as much
              as an army regiments the bodies of its soldiers.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/21.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/22.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-7">
            <span className="content__item-number oh">
              <span className="oh__inner">07</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Irresistible</span>
            </h2>
            <p className="content__item-text">
              When regimented, a group at times offers an irresistible pressure
              before which legislators, editors, and teachers are helpless.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/29.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/30.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-8">
            <span className="content__item-number oh">
              <span className="oh__inner">08</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Pressure</span>
            </h2>
            <p className="content__item-text">
              A desire for a specific reform, however widespread, cannot be
              translated into action until it is made articulate, and until it
              has exerted sufficient pressure upon the proper law-making bodies.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/23.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/24.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-9">
            <span className="content__item-number oh">
              <span className="oh__inner">09</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Interests</span>
            </h2>
            <p className="content__item-text">
              In the active proselytizing minorities in whom selfish interests
              and public interests coincide lie the progress and development of
              America.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/25.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/26.jpg)' }}
              />
            </nav>
          </div>
          <div className="content__item" id="item-10">
            <span className="content__item-number oh">
              <span className="oh__inner">10</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Think</span>
            </h2>
            <p className="content__item-text">
              Small groups of persons can, and do, make the rest of us think
              what they please about a given subject.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: 'url(img/27.jpg)' }}
              />
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: 'url(img/28.jpg)' }}
              />
            </nav>
          </div>
          <button className="back">
            <svg viewBox="0 0 50 9" width="100%">
              <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77" />
            </svg>
          </button>
          <nav className="grid--mini grid">
            <div className="grid__cell grid__cell-c1-r1">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/1.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c3-r1">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/2.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c4-r1">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/3.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c1-r2">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/4.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c3-r2">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/5.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c2-r3">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/6.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c4-r3">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/7.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c1-r4">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/8.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c3-r4">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/9.jpg)' }}
                />
              </div>
            </div>
            <div className="grid__cell grid__cell-c3-r5">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: 'url(img/10.jpg)' }}
                />
              </div>
            </div>
          </nav>
        </div>
      </main>
      {/* Excerpts from: Propaganda (1928) by Edward Bernays */}
    </>
  );
}
