import { css } from "@emotion/react";
import { DURATION, MENU_WIDTH, SideMenu } from "./components/side-menu";
import { useState } from "react";

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClick1 = () => {
    if (isOpen1) return;

    setIsOpen1(true);
    setTimeout(() => {
      setIsOpen1(false);
    }, DURATION);
  };

  const handleClick2 = () => {
    if (isOpen2) return;

    setIsOpen2(true);
    setTimeout(() => {
      setIsOpen2(false);
    }, DURATION);
  };

  return (
    <div>
      <h1>スライドメニューのCSS</h1>
      <p>
        スライドメニューのアニメーションには、positionやmarginを変化させるよりも、transformプロパティを使うのがおすすめです。
      </p>
      <p>
        レンダリング処理が軽量なため、なめらかに表示されます。
        <a
          href="https://blog.leap-in.com/lets-learn-how-to-browser-works/"
          target="_blank"
        >
          詳細はこちらのブログがおすすめ
        </a>
      </p>
      <p>まずは、デモをご覧ください。</p>
      <div
        css={
          {
            //
          }
        }
      >
        <button onClick={() => handleClick1()}>position</button>
        <button onClick={() => handleClick2()}>translate</button>
        <SideMenu
          slideCss={css({
            right: isOpen1 ? 0 : -MENU_WIDTH,
          })}
        />
        <SideMenu
          slideCss={css({
            right: 0,
            transform: `translateX(${isOpen2 ? 0 : MENU_WIDTH}px)`,
          })}
        />
      </div>
    </div>
  );
}

export default App;
