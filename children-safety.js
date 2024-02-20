const videos = {
    "school-safety": [
        "IVH2DdJAuMI",
        "VIDEO_ID_2",
        "VIDEO_ID_3"
    ],
    "stranger-danger": [
        "SY7RhBszp0k",
        "92HCKfYakLU",
        "VIDEO_ID_3"
    ],
    "child-health": [
        "g5QA7TDDCFk",
        "VIDEO_ID_2",
        "VIDEO_ID_3"
    ],
    "outdoor-safety": [
        "DyK5oVyW6jc",
        "VIDEO_ID_2",
        "VIDEO_ID_3"
    ],
    "handling-injuries": [
        "jsVNRSTWHYo",
        "VIDEO_ID_2",
        "VIDEO_ID_3"
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const sectionId = section.getAttribute("id");
        const randomIndex = Math.floor(Math.random() * videos[sectionId].length);
        const videoId = videos[sectionId][randomIndex];
        const videoIframe = section.querySelector("iframe");
        videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
    });
});
