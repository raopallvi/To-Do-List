function handleCheckboxClick(event) {
    event.stopPropagation(); // Stop the click event from propagating further

    const anchor = event.target.parentNode; // Get the parent anchor element
    anchor.click(); // Trigger the anchor's click event
  }