
export default function App() {
 
 let counter = 0;

  const possibleSteps: number[][] = [
    [2, 1],
    [1,2],
    [-1,2],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1,-2],
    [-1,-2]
    
  ];
  
  const getShortestDistance = (Array: number[][], finish: number[]) :number[] => {
    const distanceFromFinish = Array.map((points) => {
      return Math.sqrt(Math.pow(finish[0] - points[0], 2) + Math.pow(finish[1] - points[1], 2));
    })

    const shortestDistance = Math.min(...distanceFromFinish);
    console.log(distanceFromFinish);

    
    
    const index = distanceFromFinish.indexOf(shortestDistance);
    const finalCoordinates = Array[index]
   
    return finalCoordinates;
  
  };
  
 

  const getPossibleCoordinates = (
    currentPosition: number[],
    targetPosition: number[]
  ) => {
    if(JSON.stringify(currentPosition) !== JSON.stringify(targetPosition)){
      
      counter ++;
      const allSteps = possibleSteps?.map((steps) => {
        return [currentPosition[0] + steps[0], currentPosition[1] + steps[1]];
      });
     
      const reducedArray = allSteps?.filter((steps) => (
        steps[0] >= 1 && steps[0] <= 8 && steps[1] >= 1 && steps[1] <= 8
      ))

      console.log(reducedArray);
      const currentCoordinate =getShortestDistance(reducedArray, targetPosition);
      console.log(currentCoordinate);
      
      if(JSON.stringify(currentCoordinate) !== JSON.stringify(targetPosition)){
       
        getPossibleCoordinates(currentCoordinate,targetPosition)
      }
      

      if(JSON.stringify(currentCoordinate) === JSON.stringify(targetPosition)){
      alert("You have reached the target in " + counter + " steps");
      }
     
    
     
    } 
  return counter;
 
}
console.log(getPossibleCoordinates([1,1], [7,7]));
 
  return (
    <div>
      <h1>{counter}</h1>
    
    </div>
  );
}



