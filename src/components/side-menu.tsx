import { FC, PropsWithChildren } from "react";
import { SerializedStyles, css } from "@emotion/react";

export const MENU_WIDTH = 600;
export const DURATION = 500;

type SideMenuProps = {
  slideCss: SerializedStyles;
};

export const SideMenu: FC<PropsWithChildren<SideMenuProps>> = ({
  slideCss,
  children,
}) => {
  const wrapperStyle = css([
    {
      width: "100%",
      maxWidth: MENU_WIDTH,
      height: "100vh",
      position: "fixed",
      top: 0,
      background: "linear-gradient(to bottom, #3f51b5, #1a237e)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
      transitionDuration: `${DURATION}ms`,
    },
    slideCss,
  ]);

  return <div css={wrapperStyle}>{children}</div>;
};
