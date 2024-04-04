// pointFunctions.js
export const plusHandle = (setPoint, Point) => {
    setPoint({
      NumOfoint: Point.NumOfoint + 50
    });
  };
  
  export const subHandle = (setPoint, Point) => {
    setPoint({
      NumOfoint: Point.NumOfoint - 50
    });
  };
  
  export const hidePopup = (setIsPopupVisible) => {
    setIsPopupVisible(false);
  };
  
  export const handleOk = (inputPoints, Point, setPoint, inputPointstotal, setinputPointstotal, message) => {
    if (inputPoints <= Point.NumOfoint) {
      const pointLast = Point.NumOfoint - inputPoints;
      const newInputPointstotal = inputPointstotal + inputPoints;
      setPoint({
        NumOfoint: pointLast
      });
      setinputPointstotal(newInputPointstotal);
    } else {
      message.error('You cannot input more points than you have.');
    }
  };
  
  export const cancelpoint = (Point, setPoint, inputPointstotal, setinputPointstotal) => {
    const repoint = Point.NumOfoint + inputPointstotal;
    setinputPointstotal(0);
    setPoint({
      NumOfoint: repoint
    });
  };
  