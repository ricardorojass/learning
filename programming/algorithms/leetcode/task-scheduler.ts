const tasks = [ "A", "A", "B" ]
const newMap = tasks.reduce((map, obj)=> {
    map[obj] = map[obj] + 1 || 1 ;
    return map;
}, {});
// return the array
 const array= Object.entries(newMap)

 console.log(
   array
 );

