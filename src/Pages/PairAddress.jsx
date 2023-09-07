import React, { useContext } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { DataContext } from "../DataContext/DataContextProvider";
import { getPair, getPairSuccess, pairFailed } from "../DataContext/action";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
import Card from "../Components/Card/Card";
import ConnectButton from "../Components/ConnectButton/ConnectButton";
const PairAddress = () => {
  const { state, dispatch } = useContext(DataContext);

  const handleSearch = async (e) => {
    try {
      dispatch(getPair());
      let data = await axios
        .get(`https://api.dexscreener.com/latest/dex/pairs/bsc/${e}`)
        .then((res) =>
          res.data.pairs.sort((a, b) => Number(b.priceUsd) - Number(a.priceUsd))
        )
        .catch((err) => err.message);

      data = data.slice(0, 10);

      dispatch(getPairSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(pairFailed());
      throw error;
    }
  };
  console.log(state.isLoading);

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {/* <div className="font-poppins font-semibold absolute md:right-[44px] md:top-[24px] md:text-[16px] md:w-[156px] md:h-[52px] md:rounded-[20px] md:font-semibold">
        <ConnectButton className="connectBtnSm" />
      </div> */}
      <ConnectButton/>
      <div className="pt-[95px] pl-[40px] pr-[32px] md:ml-[300px] border-[mred]">
        {state.isLoading && (
          <div className="pt-[60px] pl-[40px] pr-[10px] flex justify-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            ></BallTriangle>
          </div>
        )}
        {state.pairData.length > 0 ? (
          <div className="sm:mt-16 md:mt-5">
            <p className="font-wsans text-[#F7F9F9]  text-[24px] font-semibold">
              {" "}
              Pair Search Results
            </p>
            <div className=" pb-[196px]">
              {Array.isArray(state.pairData) &&
                state.pairData.map(
                  (
                    {
                      pairCreatedAt,
                      chainId,
                      dexId,
                      pairAddress,
                      baseToken,
                      quoteToken,
                      priceNative,
                      priceUsd,
                    },
                    i
                  ) => {
                    return (
                      <Card
                        key={i}
                        pairCreatedAt={pairCreatedAt}
                        symbol={chainId.toUpperCase()}
                        dexId={dexId.length > 15 ? dexId.slice(0, 7) : dexId}
                        pairAddress={`#${pairAddress.slice(0, 5)}..`}
                        baseToken={baseToken}
                        quoteToken={quoteToken}
                        priceNative={priceNative}
                        priceUsd={priceUsd}
                        last={i === state.pairData.length ? true : false}
                      />
                    );
                  }
                )}
            </div>
          </div>
        ) : (
          <div className="pt-[100px] shadow-2xl rounded-full ">
            <p className="text-[25px] text-center p-5 text-[#fff]">
              Enter Pair address, Something like this
            </p>
            <p className="text-[25px] text-center p-5 text-[#ffffff]">
              Eg:0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PairAddress;
