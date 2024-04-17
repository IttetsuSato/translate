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
      <h1>スライドメニューの正しいCSS</h1>
      <p>スライドするサイドメニューを実装するCSSを考えてください。</p>
      <p>
        まず、何かしらの開閉状態を管理する変数（isOpenとします）を用意しますね。
      </p>
      <p>
        isOpenがtrueになると、サイドメニューのpositionを変更しますか？
        <br />
        それとも、サイドメニューのmarginをマイナスの状態から0に変更しますか？
      </p>
      <p>それらは、私からすると間違った実装です。</p>
      <p>正しい実装は、translateというCSSを使用することです。</p>
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
