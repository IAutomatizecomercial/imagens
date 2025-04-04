import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Flow CRM</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contacts">Contatos</Link>
        <Link to="/kanban">Kanban</Link>
        <Link to="/whatsapp">WhatsApp</Link>
      </div>
      <div className="navbar-user">
        <Link to="/profile">Perfil</Link>
        <button className="logout-btn">Sair</button>
      </div>
    </nav>
  );
}

export default Navbar;
