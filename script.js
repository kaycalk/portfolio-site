/* =========================
   PROJECT DATA
========================= */
const projects = {
  hawaii: {
    name: "Hawaii",
    images: [
      {src: "images/hawaii/kayla-2026-hawaii-01.jpg", alt: "Empty beach park at golden hour - Oahu, Hawaii - environmental photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-02.jpg", alt: "Waves and surfers catching golden light at sunset - Oahu, Hawaii - environmental photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-03.jpg", alt: "Maui Hawaii coastline at sunset - Maui, Hawaii - cinematic landscape photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-04.jpg", alt: "Hawaiian green sea turtle (honu) coming ashore to bask in the sun - Maui, Hawaii - environmental photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-05.jpg", alt: "Silhouette of a man at sunset on a Hawaiian beach - Oahu, Hawaii - cinematic observation by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-06.jpg", alt: "Dreamy, rocky shoreline - Oahu, Hawaii - immersive landscape imagery by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-07.jpg", alt: "Milky way, moon, and meteor framed by palms in an Oahu backyard - Oahu, Hawaii - night sky photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-08.jpg", alt: "Sailboat silhouette on the horizon at sunset - Oahu, Hawaii - cinematic landscape photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-09.jpg", alt: "Surfer catches a wave, with waves crashing in the distance - Maui, Hawaii - lifestyle storytelling photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-10.jpg", alt: "Kīlauea (Kilauea) volcano erupting with lava fountains and smoke - Big Island, Kona, Hawaii - volcanic photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-11.jpg", alt: "Kīlauea (Kilauea) volcano lava fountain at night - Big Island, Kona, Hawaii - volcanic photography by Kayla Calk"},
      {src: "images/hawaii/kayla-2026-hawaii-12.jpg", alt: "Girl stands above the clouds at summit of Haleakala (Haleakalā) volcano - Maui, Hawaii - cinematic landscape photography by Kayla Calk"},
    ]
  },
  colorado: {
    name: "Colorado",
    images: [
      {src: "images/colorado/kayla-2025-colorado-01.jpg", alt: "Snowy Colorado cabin with backcountry skis - Colorado - cinematic landscape photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-02.jpg", alt: "Snowfall and ski tracks from cabin window - Colorado - environmental photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-03.jpg", alt: "Picnic area in the woods - Fraser, Colorado - cinematic landscape photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-04.jpg", alt: "Small cabin recreational area - Fraser, Colorado - environmnental photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-05.jpg", alt: "Backcountry hiking gear inside rustic alpine cabin — Colorado — lifestyle storytelling photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-06.jpg", alt: "Still life of lounge area in a rustic alpine cabin - Colorado - lifestyle storytelling photography by Kayla Calk"}, 
      {src: "images/colorado/kayla-2025-colorado-07.jpg", alt: "Tree-lined drive through the mountains - Colorado - cinematic landscape photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-08.jpg", alt: "Big top gathering area in the woods - Fraser, Colorado - environmental photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-09.jpg", alt: "Mountain estate - Colorado - environmental photography by Kayla Calk"},
      {src: "images/colorado/kayla-2025-colorado-10.jpg", alt: "Backcountry cabin under the stars - Colorado - night sky photography by Kayla Calk"},
    ]
  },

  cancun: {
    name: "Cancun",
    images: [
      {src: "images/cancun/kayla-2025-cancun-01.jpg", alt: "Aerial view of all inclusive Cancun resort - Cancun, Mexico - drone photography by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-02.jpg", alt: "Palms on coast from above - Cancun, Mexico - cinematic aerial imagery by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-03.jpg", alt: "Birds eye view of all inclusive resort pool area - Cancun, Mexico - drone visual storytelling by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-04.jpg", alt: "All inclusive resort after a light rain shower - Cancun, Mexico - property photography by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-05.jpg", alt: "Lobby lounge area - Cancun, Mexico - interior and spatial photography by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-06.jpg", alt: "Upgraded hotel room with freestanding bathtub and king bed - Cancun, Mexico - real estate photography by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-07.jpg", alt: "Brightly lit deluxe balcony with soaking tub - Cancun, Mexico - space and light documentation by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-08.jpg", alt: "Fruit plate room service overlooking balcony - Cancun, Mexico - hotel photography by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-09.jpg", alt: "Lobby lounge area on a sunny day - Cancun, Mexico - real estate photography by Kayla Calk"},
      {src: "images/cancun/kayla-2025-cancun-10.jpg", alt: "Moody lighting in hotel corridor - Cancun, Mexico - light and composition study by Kayla Calk"},
    ]
  },
  tulum: {
    name: "Tulum",
    images: [
      {src: "images/tulum/kayla-2025-tulum-01.jpg", alt: "Morning at Tuuch cenote - Tulum, Mexico - hotel photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-02.jpg", alt: "Airy bohemian hotel room in Tulum - Tulum, Mexico - real estate photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-03.jpg", alt: "Jungle view in bed - Tulum, Mexico - interior and spatial photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-04.jpg", alt: "Tropical foliage in Tulum - Tulum, Mexico - nature photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-05.jpg", alt: "Bohemian jungle outlook from Tulum hotelroom - Tulum, Mexico - property photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-06.jpg", alt: "Breakfast for two overlooking the cenote - Tulum, Mexico - property photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-07.jpg", alt: "Stillness at cenote beach club at dawn - Tulum, Mexico - environmental design photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-08.jpg", alt: "Leading lines into the cenote - Tulum, Mexico - upscale material and light exploration by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-09.jpg", alt: "Tulum jungle foliage from hotel room - Tulum, Mexico - interior and spatial photography by Kayla Calk"},
      {src: "images/tulum/kayla-2025-tulum-10.jpg", alt: "Sunny day at hotel cenote pool - Tulum, Mexico - hotel portraiture by Kayla Calk"},
    ]
  },
  rodeo: {
    name: "Rodeo Nights",
    images: [
      "images/rodeo/1.jpg",
      "images/rodeo/2.jpg"
    ]
  }
};

/* =========================
   STATE
========================= */
let currentKey = "";
let currentIndex = 0;
let mode = "gallery";

const lightbox = document.getElementById("lightbox");

/* =========================
   IMAGE FADE-IN HELPER
========================= */
function applyImageFadeIn(scope = document) {
  scope.querySelectorAll("img").forEach(img => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.onload = () => img.classList.add("loaded");
    }
  });
}

/* =========================
   THEME TOGGLE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;
  const scrollBtn = document.getElementById("scrollTopBtn");
  const lightbox = document.getElementById("lightbox");

  // Show/hide scroll button
  function toggleScrollBtn() {
    const pageScroll = window.scrollY || document.documentElement.scrollTop;
    const lightboxScroll = lightbox ? lightbox.scrollTop : 0;

    if (pageScroll > 50 || lightboxScroll > 50) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleScrollBtn);
  if (lightbox) lightbox.addEventListener("scroll", toggleScrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (lightbox) lightbox.scrollTo({ top: 0, behavior: "smooth" });
  });

  function updateLabel() {
    btn.textContent = body.classList.contains("dark")
      ? "Switch to Light"
      : "Switch to Dark";
  }

  const saved = localStorage.getItem("theme");
  if (saved) {
    body.classList.remove("dark", "light");
    body.classList.add(saved);
  }

  

  updateLabel();

  btn.onclick = () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    updateLabel();
  };

  document.querySelectorAll(".project").forEach(project => {

  project.addEventListener("touchstart", () => {
    project.classList.add("active");
  });

  project.addEventListener("touchend", () => {
    setTimeout(() => {
      project.classList.remove("active");
    }, 200); // stays visible briefly
  });

});
applyImageFadeIn();

});

/* =========================
   OPEN PROJECT (ALWAYS GALLERY FIRST)
========================= */
document.querySelectorAll(".project").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    currentKey = el.dataset.project;
    openGallery();
  });
});

/* =========================
   GALLERY VIEW
========================= */
function openGallery() {
  mode = "gallery";
  document.body.classList.add("no-scroll");

  const project = projects[currentKey];
  lightbox.classList.remove("image-mode");

  lightbox.innerHTML = `
    <span class="close">&times;</span>
    <div class="gallery-title">${project.name}</div>
    <div class="gallery-grid">
    ${project.images.map((img, i) => {
  const src = typeof img === "string" ? img : img.src;
  const alt = typeof img === "string" ? "" : img.alt;

  return `<img src="${src}" alt="${alt}" data-index="${i}">`;
}).join("")}
    </div>
  `;

  lightbox.classList.remove("hidden");
  applyImageFadeIn(lightbox);


  // Thumbnail clicks
  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = Number(img.dataset.index);
      openImage(index);
    });
  });

  // Close (to homepage)
  document.querySelector(".close").onclick = (e) => {
    e.stopPropagation();
    closeLightbox();
  };

  // ESC closes gallery too
  document.onkeydown = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  };
}

/* =========================
   IMAGE VIEW
========================= */
function openImage(index) {
  mode = "image";
  currentIndex = index;


  lightbox.classList.add("image-mode");


  const project = projects[currentKey];
  const imageObj = project.images[index];
  const src = typeof imageObj === "string" ? imageObj : imageObj.src;
  const alt = typeof imageObj === "string" ? "" : imageObj.alt; 

  lightbox.innerHTML = `
    <span class="close ui">&times;</span>
    <img class="lightbox-img" src="${src}" alt="${alt}">
    <span class="nav prev ui">&#10094;</span>
    <span class="nav next ui">&#10095;</span>
    <div class="counter ui">${index + 1} / ${project.images.length}</div>
  `;
  
  applyImageFadeIn(lightbox);
  const img = document.querySelector(".lightbox-img");
  img.style.opacity = 0;

if (img.complete) {
  requestAnimationFrame(() => img.style.opacity = 1);
} else {
  img.onload = () => img.style.opacity = 1;
}
  let startX = 0;

img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) change(1); // swipe left → next
    else change(-1);         // swipe right → prev
  }
});


  const ui = document.querySelectorAll(".ui");

  let uiTimeout;

  function showUI() {

    // ✅ Mobile + Tablet: Always show UI (no fading)
    if (window.innerWidth <= 900) {
    ui.forEach(el => el.style.opacity = 1);
    return; // 🚫 no fading on mobile
  }

    ui.forEach(el => el.style.opacity = 1);
    clearTimeout(uiTimeout);
    uiTimeout = setTimeout(() => {
      ui.forEach(el => el.style.opacity = 0);
    }, 2000);
  }

  showUI();

  lightbox.addEventListener("mousemove", showUI);

  /* CLICK LEFT/RIGHT ON IMAGE */
  img.addEventListener("click", (e) => {
    const rect = img.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      change(-1);
    } else {
      change(1);
    }
  });

  /* ARROWS */
  document.querySelector(".next").onclick = (e) => {
    e.stopPropagation();
    change(1);
  };

  document.querySelector(".prev").onclick = (e) => {
    e.stopPropagation();
    change(-1);
  };

  /* CLOSE -> BACK TO GALLERY */
  document.querySelector(".close").onclick = (e) => {
    e.stopPropagation();
    openGallery();
  };

  /* KEYBOARD */
  document.onkeydown = (e) => {
    if (e.key === "Escape") openGallery();
    if (e.key === "ArrowRight") change(1);
    if (e.key === "ArrowLeft") change(-1);
  };
}

/* =========================
   CHANGE IMAGE (NO BLEED)
========================= */
function change(dir) {
  const project = projects[currentKey];
  currentIndex = (currentIndex + dir + project.images.length) % project.images.length;

  const img = document.querySelector(".lightbox-img");

  const preload = new Image();
  const imageObj = project.images[currentIndex];
  const src = typeof imageObj === "string" ? imageObj : imageObj.src;
  const alt = typeof imageObj === "string" ? "" : imageObj.alt;

  preload.src = src;

  
  // STEP 1: fade out current image smoothly
  img.style.opacity = 0;


  preload.onload = () => {
    // small delay ensures fade-out completes (smooth transition)
    setTimeout(() => {
      img.src = src;
      img.alt = alt;

      // STEP 2: fade back in
      requestAnimationFrame(() => {
        img.style.opacity = 1;
      });

    }, 125); // 👈 tweak this for feel (150–300 sweet spot)
  };

  document.querySelector(".counter").textContent =
    `${currentIndex + 1} / ${project.images.length}`;
}



/* =========================
   CLOSE LIGHTBOX
========================= */
function closeLightbox() {
  document.body.classList.remove("no-scroll");
  lightbox.classList.add("hidden");

  document.onkeydown = null;
}
