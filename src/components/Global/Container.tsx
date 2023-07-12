import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-6 md:px-10 2xl:px-[80px] w-screen">{children}</div>;
};

export default Container;
