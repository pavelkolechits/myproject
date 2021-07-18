import './link.css';
export const CustomLink = ({ children, className, onMouseEnter, onMouseLeave, onClick}) => {
    



	return <li onClick={onClick} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={className}>{children}</li>;
};
