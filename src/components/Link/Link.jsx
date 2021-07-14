import './link.css';
export const Link = ({ children, className, onMouseEnter, onMouseLeave, onClick}) => {
    



	return <li onClick={onClick} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={className}>{children}</li>;
};
