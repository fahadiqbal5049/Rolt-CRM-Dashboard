
interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout:React.FC<PublicLayoutProps> = ({ children }: PublicLayoutProps) => {
  return <div className="w-full h-dvh">{children}</div>;
};