import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white w-full h-20 flex align-middle justify-center items-center">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="w-full flex align-middle justify-center items-center">
          <div>
            <Image
              src={"/assets/images/logo-atri.webp"}
              alt="Atri Fiat Ribeirão Preto"
              title="Atri Fiat Ribeirão Preto"
              width={217}
              height={52}
              className="w-full h-auto object-cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
