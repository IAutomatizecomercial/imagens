import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/contacts">Contatos</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban</Link>
        </li>
        <li>
          <Link to="/whatsapp">WhatsApp</Link>
        </li>
        <li>
          <Link to="/facebook">Facebook</Link>
        </li>
        <li>
          <Link to="/instagram">Instagram</Link>
        </li>
        <li>
          <Link to="/settings">Configurações</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
