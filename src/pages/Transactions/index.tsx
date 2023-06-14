import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="income">R$ 15.0000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>15/15/2015</td>
          </tbody>
          <tbody>
            <td width="50%">Compra de site</td>
            <td>
              <PriceHighLight variant="outcome">- R$ 12.0000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>15/15/2015</td>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
