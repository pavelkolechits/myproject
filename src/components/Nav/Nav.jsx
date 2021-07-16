import "./nav.css";

export const Nav = ({ children, className }) => {
  return <ol className={className}>{children}</ol>;
};
