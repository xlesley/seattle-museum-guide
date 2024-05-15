// this function fetches data from the Seattle Cultural Space Inventory API
function getData() {
fetch('https://data.seattle.gov/resource/vsxr-aydq.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Filter data based on 'name' column
    let filteredData = data.filter(item => item.name.toLowerCase().includes('museum')); // filters culteral spaces to only museums
    filteredData = filteredData.filter(item => item.phone != null); // gets rid of closed museums
    return filteredData;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}