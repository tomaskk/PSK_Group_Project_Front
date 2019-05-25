export function sortData(property, data, sorted) {
  return {
    type: 'SORT',
    property,
    payload: data,
    sorted
  };
}

export function filterData(data) {
  return {
    type: 'FILTER',
    payload: data
  };
}

export function storeFilter(property, typed) {
  return {
    type: 'STORE_FILTER',
    property,
    typed
  };
}
