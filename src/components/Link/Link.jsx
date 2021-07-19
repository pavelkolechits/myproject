import "./link.css";
export const CustomLink = ({ children, className, onClick }) => {
  return (
    <li onClick={onClick} className={className}>
      {children}
    </li>
  );
};
