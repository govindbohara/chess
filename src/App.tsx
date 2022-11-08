import { useEffect, useState } from "react";


export default function App() {
 
 let counter = 0;

  const possibleSteps: number[][] = [
    [3, 1],
    [1,3],
    [-1,3],
    [3, -1],
    [-3, 1],
    [-3, -1],
    [1,-3],
    [-1,-3]
    
  ];


  const getShortestDistance = (Array: number[][], finish: number[]) => {
    counter++;
    
    const distance = Array.map((points) => {
      return Math.sqrt(
         Math.pow(points[1] - points[0], 2) +Math.pow(finish[1] - finish[0], 2)
      );
    });
    const minNum = Math.min(...distance);
    console.log(distance, "minnum:",minNum);
    
    const index = distance.indexOf(minNum);
    return Array[index];
    
    
    
   
  };

  const getPossibleCoordinates = (
    currentPosition: number[],
    targetPosition: number[]
  ) => {
   
    const allSteps = possibleSteps?.map((steps) => {
      return [currentPosition[0] + steps[0], currentPosition[1] + steps[1]];
    });
   
    const reducedArray = allSteps?.filter((steps) => (
      steps[0] >= 0 && steps[0] <= 7 && steps[1] >= 0 && steps[1] <= 7
    ))
    
    const currentCoordinate =getShortestDistance(reducedArray, targetPosition);

   if(currentCoordinate[0] !== targetPosition[0] || currentCoordinate[1] !== targetPosition[1]){
     getPossibleCoordinates(currentCoordinate, targetPosition)
  };
  // if(currentCoordinate[0] === targetPosition[0] && currentCoordinate[1] === targetPosition[1]){
  //   alert("done")
  // }
}

  getPossibleCoordinates([0,0], [2, 6]);


 

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}



