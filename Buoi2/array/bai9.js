// const filteredArray = array1.filter(value => array2.includes(value));
// const filteredArray = array1.filter(function(n) {
//     return array2.indexOf(n) !== -1;
// });


function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = [];

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else 
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}
console.log(intersect_safe([1,2,3],[1,2]));