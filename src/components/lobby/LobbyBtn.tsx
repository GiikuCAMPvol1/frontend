import Image from "next/image";
import React from "react";
import Styles from "@/components/lobby/LobbyBtn.module.scss";

type Props = {
  onClick: () => void;
  src: string;
  alt: string;
  text: string;
};

const LobbyBtn = ({ onClick, text, src, alt }: Props) => {
  return (
    <div className={`${Styles.wrapper}`} onClick={onClick}>
      <Image src={src} alt={alt} width={20} height={20} />
      <p className={Styles.btnText}>{text}</p>
    </div>
  );
};

export default LobbyBtn;
