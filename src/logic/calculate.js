import operate from './operate';


const calculate = (dataObj, button) => {




  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  }

  if (button === '+/-') {

    if (dataObj.next) {
      return {
        next: (-1 * parseFloat(dataObj.next)).toString();
      }
    }
    if (dataObj.total) {
      return {
        total: (-1 * parseFloat(dataObj.total)).toString();
      }
    }
    return {};
  }


  if (button === '.') {

  }

  if (button === '=') {

  }

  if ([0,1,2,3,4,5,6,7,8,9].includes(parseInt(button))) {
    // If button is '0' and the dataObj is '0' as well irrespective of the operation just return empty dataObj
    if (button === '0' && dataObj.next === '0') {
      return {}
    }
    if (dataObj.operation) {
      
    }

  }

  return {
    total: dataObj.next,
    next: null,
    operation: button
  }

}


export default calculate;
