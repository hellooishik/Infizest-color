// JavaScript for FAQ Accordion
$(".accordion-button").click(function () {
  $(this).toggleClass("collapsed");
});

// Transpared Fixed Code
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("solid-bg");
    navbar.classList.remove("transparent-bg");
  } else {
    navbar.classList.remove("solid-bg");
    navbar.classList.add("transparent-bg");
  }
});

// Wait for the page to fully load
window.addEventListener("load", function () {
  // Select the loading bar element
  var loadingBar = document.querySelector(".loading-bar");

  // Remove the loading bar after 2 seconds (adjust the duration as needed)
  setTimeout(function () {
    // Check if the loading bar element exists before attempting to remove it
    if (loadingBar) {
      loadingBar.remove();
    }
  }, 2000); // Adjust the duration (in milliseconds) as needed
});

$(document).ready(function () {
  AOS.init();
});

// JavaScript to increment counters
function startCounters() {
  var counter1 = document.querySelector(".counter1");
  var counter2 = document.querySelector(".counter2");
  var counter3 = document.querySelector(".counter3");
  var counter4 = document.querySelector(".counter4");

  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;

  var interval = setInterval(function () {
    count1++;
    count2++;
    count3++;
    count4++;
    counter1.textContent = count1 + "K";
    counter2.textContent = count2 + "K";
    counter3.textContent = count3 + "K";
    counter4.textContent = count4 + "K";

    // Stop counters at desired value
    if (count1 >= 50 || count2 >= 100 || count3 >= 70 || count4 >= 80) {
      clearInterval(interval);
    }
  }, 10); // Adjust the interval for desired speed
}
// Progress bar
document.addEventListener("DOMContentLoaded", function () {
  var progressBar = document.querySelectorAll(".progress-bar");

  progressBar.forEach(function (bar) {
    var percentage = bar.getAttribute("data-percentage");
    var progressContent = bar.querySelector(".progress-content");

    progressContent.style.width = percentage;
  });
});
// Faq box
document.addEventListener("DOMContentLoaded", function () {
  var accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var collapseTargetId = this.getAttribute("data-bs-target");
      var collapseTarget = document.querySelector(collapseTargetId);

      if (collapseTarget.classList.contains("collapse")) {
        collapseTarget.classList.toggle("show");
      }
    });
  });
});

// faq box ends
// Start counters when the page loads
window.addEventListener("load", startCounters);
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("fresherBtn").addEventListener("click", function () {
  // Redirect to the page for fresher
  window.location.href = "fresher_page.html";
});

document
  .getElementById("experiencedBtn")
  .addEventListener("click", function () {
    // Redirect to the page for experienced
    window.location.href = "experienced_page.html";
  });
// Wrap the code in an event listener for DOMContentLoaded to ensure it runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if the close button exists before adding the event listener
  var closeButton = document.querySelector(".close-popup");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      // Hide the popup
      document.getElementById("popup").style.display = "none";
    });
  } else {
    console.error("Close button not found!");
  }
});
function calculateTotalTime(index) {
  var startDate = new Date(
    document.getElementsByName("Start_Date_" + index)[0].value
  );
  var endDate = new Date(
    document.getElementsByName("End_Date_" + index)[0].value
  );

  if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
    var diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    var years = Math.floor(diffDays / 365);
    var months = Math.floor((diffDays % 365) / 30);
    var days = diffDays % 30;
    var totalTime = "";
    if (years > 0) {
      totalTime += years + " years ";
    }
    if (months > 0) {
      totalTime += months + " months ";
    }
    if (days > 0) {
      totalTime += days + " days";
    }
    document.getElementsByName("Total_Time_" + index)[0].value =
      totalTime.trim();
  } else {
    document.getElementsByName("Total_Time_" + index)[0].value = "";
  }
}

// Counting animation
function countToTarget(counterId, targetValue, duration) {
  const counter = document.getElementById(counterId);
  let start = 1;
  let increment = Math.ceil((targetValue - start) / (duration / 60));

  function count() {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(
        percentage * (targetValue - start) + start
      );
      counter.textContent = currentCount.toLocaleString() + "K+";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  count();
}

// Call countToTarget for each counter
countToTarget("counter", 250, 5000); // For the first counter with ID 'counter'
countToTarget("counterone", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("countertwo", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("counterthree", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("counterfour", 250, 5000); // For the second counter with ID 'counterone'
countToTarget("counterfive", 250, 5000); // For the second counter with ID 'counterone'
// Function to update counter
function updateCounter(element, targetValue, increment) {
  let currentValue = 1000; // Starting value at 1K
  const counterElement = document.querySelector(element);

  function formatNumber(number) {
    return (number / 1000).toLocaleString() + "K+";
  }

  function incrementCounter() {
    if (currentValue < targetValue) {
      currentValue += increment;
      if (currentValue > targetValue) {
        currentValue = targetValue;
      }
      counterElement.textContent = formatNumber(currentValue);
      if (currentValue >= targetValue) {
        clearInterval(counterInterval);
      }
    }
  }

  const counterInterval = setInterval(incrementCounter, 500);
}

// Call functions
jQuery(document).ready(function () {
  animateProgressBars();
});

changeWord();

countToTarget();

// Call updateCounter for each element
updateCounter(".counter1", 25000, 500); // For the first item
updateCounter(".counter2", 50000, 1000); // For the second item
updateCounter(".counter3", 75000, 1500); // For the third item
updateCounter(".counter4", 100000, 2000); // For the fourth item

// Slick Slider initialization
$(".testimonial-wrapper").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  loop: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// The Main Justified Images POLYGO
// Wait for the DOM to be ready

document.addEventListener("DOMContentLoaded", function () {
  const textAnimation = anime.timeline({
    targets: ".animate-text",
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(200, { start: 1000 }), // Delay between animations
    opacity: 1, // Fade in
  });
  textAnimation.play();
});

// Carrer Form
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the fresher button
  document.getElementById("fresherBtn").addEventListener("click", function () {
    // Redirect to the page for fresher
    window.location.href = "fresher_page.html";
  });

  // Event listener for the experienced button
  document
    .getElementById("experiencedBtn")
    .addEventListener("click", function () {
      // Redirect to the page for experienced
      window.location.href = "experienced_page.html";
    });
});
// contact form
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 22.9868, lng: 87.855 }, // West Bengal, India
    zoom: 12,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}

// counter Bar Js
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("navbar-scrolled");
  } else {
    header.classList.remove("navbar-scrolled");
  }
});
// Wait for the page to fully load
window.addEventListener("load", function () {
  // Select the loading bar element
  var loadingBar = document.querySelector(".loading-bar");

  // Remove the loading bar after 2 seconds (adjust the duration as needed)
  setTimeout(function () {
    // Check if the loading bar element exists before attempting to remove it
    if (loadingBar) {
      loadingBar.remove();
    }
  }, 2000); // Adjust the duration (in milliseconds) as needed
});
