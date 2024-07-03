export const scrollToMiddle = (id) => {
    const targetElement = document.getElementById(id);
    const headerHeight = document.getElementById('header').offsetHeight;


    // only scroll to middle if the sidebar is present
    if (window.innerWidth < 900) {
        targetElement.scrollIntoView({block: "center"});
    } else {
        // offset scroll when header is present
        window.scrollTo({
            // -20 is to take dividers into consideration
            top: -20 + targetElement.offsetTop + targetElement.offsetHeight / 2 - window.innerHeight / 2 - headerHeight / 2,
            behavior: 'smooth'
        });
    }
};