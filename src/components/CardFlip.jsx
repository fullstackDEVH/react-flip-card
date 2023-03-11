import iconBack from '../assest/icon_back.png'

const CardFlip = ( { indexItem, isPlip, handleSetChoose, index, isSame }  ) => {
  
  return (
    <>
      <div className="card_contain" onClick={()=>handleSetChoose({indexItem, index})}>
        <div className={`card ${isPlip ? "isPlip" : ""} ${isSame.includes(indexItem) ? "active" : ""}`}>
          <div className="card__front">
            <img
              src={require(`../assest/${indexItem}.png`)} 
              alt="icon front"
            />
          </div>
          <div className="card__back">
            <img src={iconBack} alt="icon back" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFlip;
