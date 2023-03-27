import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 700px;
  border: 1px solid #eee;
  table-layout: fixed;
  margin: 25px;
`;

export const HeaderTable = styled.th`
	font-size: 20px;
  font-weight: bold;
	padding: 15px;
	background: #efefef;
	border: 1px solid #dddddd;
`;

export const ItemTable = styled.td`
	font-size: 18px;
  padding: 5px 10px;
	border: 1px solid #eee;
	text-align: center;
`;

export const ItemTableFirst = styled(ItemTable)`
	text-align: left;
  padding-left: 90px;
`;

export const BodyTable = styled.tbody`
  & tr:nth-child(odd) {
    background: #F7F7F7;
  }
`;