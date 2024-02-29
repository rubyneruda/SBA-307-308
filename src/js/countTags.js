function countElementTypes() {
    // Get all elements on the page
    const allElements = document.querySelectorAll('*');

    // Create an object to store the count of each element type
    const elementCount = {};

    // Loop through all elements and count their occurrences
    allElements.forEach(element => {
      const elementType = element.tagName.toLowerCase(); // Convert to lowercase for consistency
      elementCount[elementType] = (elementCount[elementType] || 0) + 1;
    });

    // Create a string with the element counts
    let countMessage = 'Element Counts:\n';
    for (const elementType in elementCount) {
      countMessage += `${elementType}: ${elementCount[elementType]}\n`;
    }
    countMessage += `total unique tags: ${Object.keys(elementCount).length}\n`;


    // Display the alert message
    alert(countMessage);
  }
