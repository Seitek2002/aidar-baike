import { useEffect } from "react";


const MarketList = ({pair}) => {
    const [resp, setResp] = useState({ sum: null, val: null });

    useEffect(() => {
        const result = ((1 - replaceData(pair.open_price) / replaceData(pair.last_price)) * 100).toFixed(2);
        if (Math.sign(result) === 1) {
           setResp({ sum: '+' + result, val: true });
        }
        if (Math.sign(result) === -1) {
           setResp({ sum: result, val: false });
        }
     }, []);
  

    return (
        <tr className="table__anchor" >
        <td>
            <p className="pair-name">
                <span className="pair-name__first">{pair.first_ticker_name}</span>
                <span className="pair-name__second">{second_ticker_name.second_ticker_name}</span>
            </p>
        </td>
        <td>
            <p className="last-price">
                <span className="last-price__before">{pair.last_price}</span>
                <span className="last-price__after">{pair.last_rated_price}</span>
            </p>
        </td>
        <td>
            <p className={`${resp.val ? 'change--positive' : 'change--negative'}`}>{resp.sum}%</p>
        </td>
        <td>{pair.low_price}</td>
        <td>{pair.high_price}</td>
        <td>{pair.volume}</td>
    </tr>
    )
}

export default MarketList