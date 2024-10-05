type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="max-w-[1280px] mx-auto p-2">{children}</div>;
};
