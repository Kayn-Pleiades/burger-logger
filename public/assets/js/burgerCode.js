// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const eatBtn = document.querySelectorAll('.eat');
  
    // Set up the event listener for the create button
    if (eatBtn) {
      eatBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('id');
  
          const newState = {
            devoured: true,
          };
  
          $ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newState,
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`burger was eaten`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  });
  