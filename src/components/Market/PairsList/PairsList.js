import React, { useContext, useEffect, useMemo } from 'react';
import { OptionsContext } from '../../../App';
import TablePairsLoader from '../../../ui/TablePairsLoader/TablePairsLoader';
import CurrencyPairsListItem from '..//PairsItem/PairsItem';
import { usePairsList } from '../../СurrencyPairsModul/hooks/usePairsList';

function PairsList({ toggleTabs, tabNumber, criptoVal,limit,searchedValue }) {
   const { list, fetchPairsList } = usePairsList(criptoVal,limit);
   const { options } = useContext(OptionsContext);

   useEffect(() => {
      if (toggleTabs === tabNumber) {
         let listInterval = setInterval(() => {
            fetchPairsList();
         }, 10000);
         return () => {
            clearInterval(listInterval);
         };
      }
   }, [toggleTabs]);

   useEffect(() => {
      if (toggleTabs === tabNumber) {
         fetchPairsList();
      }
   }, [options]);

   const searchedList = useMemo(() => {
      return list.filter(el => el.first_ticker_name.toLowerCase().includes(searchedValue))
   }, [searchedValue, list])

   if (list.length === 0)
      return (
         <div className={toggleTabs === tabNumber ? `b-tab active` : 'b-tab'}>
            <TablePairsLoader />
         </div>
      );

   return (
      <div className={toggleTabs === tabNumber ? `b-tab active` : 'b-tab'}>
         <table className="market-table">
            <thead>
               <tr>
                  <th className="table-heading">Futures</th>
                  <th className="table-heading">Last Price</th>
                  <th className="table-heading">24H Change</th>
                  <th className="table-heading">24H Low</th>
                  <th className="table-heading">24H High</th>
                  <th className="table-heading">24H VOL</th>
               </tr>
            </thead>
            <tbody>
               {searchedList.map((pair) => (
                  <CurrencyPairsListItem key={pair.id} pair={pair} sign={options.currencySign} />
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default PairsList
