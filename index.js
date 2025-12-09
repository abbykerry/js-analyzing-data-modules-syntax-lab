require('datejs');
function combineUsers(...args){
  const combineObject = {
    users : []
  }

for(const eacharr of args){
  combineObject.users.push(...eacharr);
}
combineObject.merge_date = Date.today().toString("M/d/yyyy");
  return combineObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};