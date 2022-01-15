// import toast from 'react-hot-toast';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import Button from '../components/Button';
import InputLabel from '../components/InputLabel';
import { useState } from 'react';
import { calculateMinSellPriceForProfit } from '../utils/calculateSellPrice';
import { getSolanaMintCost } from '../utils/solanaTransaction';
import Spinner from '../components/Spinner';

function HomePage() {
  // const [mintPrice, setMintPrice] = useState(0);
  // const [computeCost1, setComputeCost1] = useState(0);
  // const [computeCost2, setComputeCost2] = useState(0);
  // const [feeTransaction, setFeeTransaction] = useState(0);
  const [feeOfSell, setFeeOfSell] = useState(0);
  const [txn, setTxn] = useState('');
  const [detailsCost, setDetailsCost] = useState([]);
  const [TotalCost, setTotalCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCalculate, setIsCalculate] = useState(false);
  const [txType, setTxType] = useState('')

  const percentageToDecimal = (percentaje) => percentaje / 100;

  const setFeeOfSellLikeAsDecimal = (value) =>
    setFeeOfSell(percentageToDecimal(value));

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsCalculate(false);
    setIsLoading(true);
    const { DetailsCostDataFinal, TotalCost, transactionType } = await getSolanaMintCost(txn);
    setDetailsCost(DetailsCostDataFinal);
    setTotalCost(TotalCost);
    setTxType(transactionType);
    console.log(DetailsCostDataFinal);
    await setIsLoading(false);
    await setIsCalculate(true);
  };

  return (
    <div className="container bg-white px-10 py-10 max-w-xl h-[600px] rounded-lg w-full shadow-2xl flex flex-col gap-3">
      <h1 className='text-center text-2xl font-semibold'>Min. Sell Price Calculator</h1>
      <form onSubmit={submitHandler} className="space-y-6 pb-0">
        <InputLabel
          labelName={'Transaction Hash:'}
          updateValue={setTxn}
          inputType={'text'}
        />
        <InputLabel
          labelName={'Total Fee of Sell (%):'}
          updateValue={setFeeOfSellLikeAsDecimal}
          inputType={'number'}
          required={true}
        />
        <button></button>
      </form>
      <div className="h-72 flex flex-col justify-start gap-5">
        {detailsCost.length === 0 ? (
          <></>
        ) : (
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <p className='text-green-600 text-center text-lg font-bold'>{`* ${txType}`}</p>
                {/* {detailsCost.map((value) => {
                      return (
                        <p
                          key={value.id}
                        >{`${value.costName}: ${value.costAmount}`}</p>
                      );
                    })} */}
              </>
            )}
            {isCalculate ? (
              <>
                <p className='text-base text-center font-semibold'>Total cost: <span className='text-blue-700'>{TotalCost}</span> SOL</p>
                <div>
                  <p className="text-base text-center font-semibold">
                    Min. Sell Price: <span className='text-white bg-red-500 p-1 px-3 ml-1 rounded-full'>
                      {calculateMinSellPriceForProfit(TotalCost, feeOfSell)}
                    </span> SOL
                  </p>
                </div>
                <picture>
                  <image ></image>
                </picture>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
