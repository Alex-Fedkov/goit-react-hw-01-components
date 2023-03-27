import PropTypes from "prop-types";
import { 
  TransactionTable, 
  HeaderTable, 
  ItemTable, 
  ItemTableFirst, 
  BodyTable
} from "./styles.jsx";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
  <thead>
    <tr>
      <HeaderTable>Type</HeaderTable>
      <HeaderTable>Amount</HeaderTable>
      <HeaderTable>Currency</HeaderTable>
    </tr>
  </thead>

  <BodyTable>
    {items.map(({ id, type, amount, currency }) => {
      return (
        <tr key={id}>
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
}

export default TransactionHistory;