import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className="mx-4 px-4 md:mx-6 md:px-6 xl:mx-14 xl:px-14 2xl:px-0 2xl:max-w-6xl 2xl:mx-auto"
    >
      {children}
    </div>
  );
};

export default Wrapper;

