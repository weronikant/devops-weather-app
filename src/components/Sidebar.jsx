import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">☁</div>
        <div>
          <div className="sidebar__title">WheatherApp</div>
          <div className="sidebar__subtitle">PREMIUM</div>
        </div>
      </div>

      <nav className="sidebar__nav">
        <Link to="/" className={`sidebar__item ${ location.pathname === '/' ? 'sidebar__item--active' : ''}`}>
          Dashboard
        </Link>

        <Link to="/forecast" className={`sidebar__item ${ location.pathname === '/forecast' ? 'sidebar__item--active' : '' }`}>
          Forecasts
        </Link>
      </nav>
    </aside>
  );
}
