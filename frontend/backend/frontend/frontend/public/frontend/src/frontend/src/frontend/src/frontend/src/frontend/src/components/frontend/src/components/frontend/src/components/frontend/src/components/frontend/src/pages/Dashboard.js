import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total de Contatos</h3>
          <p className="number">347</p>
        </div>
        <div className="card">
          <h3>Leads Ativos</h3>
          <p className="number">129</p>
        </div>
        <div className="card">
          <h3>Conversas WhatsApp</h3>
          <p className="number">58</p>
        </div>
        <div className="card">
          <h3>Tarefas Pendentes</h3>
          <p className="number">12</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Desempenho Mensal</h3>
          <div className="chart-placeholder">
            Gráfico de desempenho será exibido aqui
          </div>
        </div>
        <div className="chart-container">
          <h3>Fonte de Leads</h3>
          <div className="chart-placeholder">
            Gráfico de fontes será exibido aqui
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
