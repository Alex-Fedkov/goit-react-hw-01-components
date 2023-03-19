import styled from "styled-components";

const TransactionTable = styled.table`
  width: 700px;
  border: 1px solid #eee;
  table-layout: fixed;
  margin: 25px;
`;

const HeaderTable = styled.th`
	font-size: 20px;
  font-weight: bold;
	padding: 15px;
	background: #efefef;
	border: 1px solid #dddddd;
`;

const ItemTable = styled.td`
	font-size: 18px;
  padding: 5px 10px;
	border: 1px solid #eee;
	text-align: center;
`;

const ItemTableFirst = styled(ItemTable)`
	text-align: left;
  padding-left: 90px;
`;

const BodyTable = styled.tbody`
& tr:nth-child(odd) {
	background: #F7F7F7;
}
`;

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable class="transaction-history">
  <thead>
    <tr>
      <HeaderTable>Type</HeaderTable>
      <HeaderTable>Amount</HeaderTable>
      <HeaderTable>Currency</HeaderTable>
    </tr>
  </thead>

  <BodyTable>
    {items.map(({ id, type, amount, currency }, index) => {
      return (
        <tr key={id} bgColor={index % 2 ? "" : ""}>
          <ItemTableFirst>{type}</ItemTableFirst>
          <ItemTable>{amount}</ItemTable>
          <ItemTable>{currency}</ItemTable>
        </tr>
      );
    })}
    
  </BodyTable>
</TransactionTable>
  );
};

export default TransactionHistory;