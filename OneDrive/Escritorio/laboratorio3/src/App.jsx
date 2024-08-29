import Table from "./component/Table";

const App = () => {
  const netIncomes = [
    { brand: "McDonals", income: 1291283 },
    { brand: "Burguer King", income: 19273661 },
    { brand: "KFC", income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
  const promedioIngreso = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Tabla de Ingresos Netos</h1>
      <Table data = {netIncomes}/>
      <p>Promedio de Ingreso Neto: {promedioIngreso.toFixed(2)}</p>
    </div>
  );
};

export default App;