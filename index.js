// Code your solution in this file!
const returnFirstTwoDrivers = ( drivers ) =>
{
    return drivers.slice( 0, 2 );  
}
const returnLastTwoDrivers = ( drivers ) =>
{
    return drivers.slice( -2 );
}
let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
function createFareMultiplier (integer)
{
    return integer( fare );
}
function createFareMultiplier ( number )
{
    return function ( fare )
    {
        return number * fare;
    }
}
const fareDoubler = (fare) => {
  let doubler = createFareMultiplier(2);
  return doubler(fare);
};

const fareTripler = (fare) => {
    let tripler = createFareMultiplier( 3 );
    
  return tripler(fare);
};

function selectDifferentDrivers(drivers, twoDriverFunction) {
  if (twoDriverFunction == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  }
  else if ( twoDriverFunction == returnLastTwoDrivers )
  {
    return returnLastTwoDrivers(drivers);
  }
}