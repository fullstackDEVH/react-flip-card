import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import CardFlip from "./components/CardFlip";

let initialChoose = {
  one: {
    value: "",
    index: "-1",
  },
  two: {
    value: "",
    index: "-2",
  },
};

const Ad = () => {
  const [isSame, setIsSame] = useState([]);
  const [indexCards, setIndexCards] = useState([]);
  const [choose, setChoose] = useState(initialChoose);
  const [countUp, setCountUp] = useState(0);

  const href = useRef();

  const handleCheckChoose = () => {
    if (!choose.one || !choose.two) return false;
    if (+choose.one !== +choose.two) return false;
    return true;
  };

  const createShuffle = useCallback(() => {
    let arrDuplicate = createSequenceNumber();
    for (let i = arrDuplicate.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrDuplicate[i], arrDuplicate[j]] = [arrDuplicate[j], arrDuplicate[i]];
    }
    return arrDuplicate;
  }, []);

 
  const handleSetChoose = ({ indexItem, index }) => {
    if (!choose.one.value) {
      setChoose((preValue) => ({
        ...preValue,
        one: { value: indexItem, index },
      }));
    } else if (!choose.two.value) {
      setChoose((preValue) => ({
        ...preValue,
        two: { value: indexItem, index },
      }));
    }
  };

  useLayoutEffect(() => {
    setIndexCards(createShuffle(createShuffle()));
  }, [createShuffle]);


  useEffect(() => {
    let timeout;
    if (choose.one.value && choose.two.value) {
      if (choose.one.value !== choose.two.value) {
        timeout = setTimeout(() => {
          setChoose(initialChoose);
        }, 1000);
      } else {
        setIsSame((pre) => [...pre, choose.one.value]);
        setChoose(initialChoose);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [choose]);

  useEffect(() => {
   
    if(countUp === 0 ) {
      href.current = setInterval(() => {
        setCountUp(pre=> pre +1);
      }, 1000)
    }
    console.log(indexCards.length);
    if(indexCards.length!==0 && isSame.length === indexCards.length / 2) {
      clearInterval(href.current)
    }
    
  }, [isSame.length])

  const createSequenceNumber = (count = 2) => {
    let data = [...Array(count).keys()].map((i) => i + 1);

    return [...data, ...data];
  };

 
  console.log('render');
  return (
    <div id="App">
      <h2>time : {countUp}</h2>
      <div className="container">
        {indexCards.map((indexItem, index) => (
          <CardFlip
            isPlip={+index === +choose.one.index || +index === +choose.two.index}
            indexItem={indexItem}
            index={index}
            handleSetChoose={handleSetChoose}
            isSame={isSame}
            key={Math.random() * 10000}
          />
        ))}
      </div>
    </div>
  );
};

export default Ad;
