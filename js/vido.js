let allVideos = [];

window.onload = function () {
  fetch('/api/videos/all')
    .then(response => response.json())
    .then(videos => {
      allVideos = videos;
      showAllVideos();
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
    });
};

function showAllVideos() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';

  const shuffledVideos = [...allVideos].sort(() => Math.random() - 0.5);

  const videoContainer = document.createElement('div');
  videoContainer.className = 'aw-video-container';

  shuffledVideos.forEach(video => {
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.src = video.url;

    const videoTitle = document.createElement('p');
    videoTitle.textContent = `${video.category} - ${video.title}`;

    const videoDiv = document.createElement('div');
    videoDiv.className = 'aw-video';
    videoDiv.appendChild(videoElement);
    videoDiv.appendChild(videoTitle);

    videoContainer.appendChild(videoDiv);
  });

  mainContent.appendChild(videoContainer);
}

function showVideos(category) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';

  const categoryVideos = allVideos.filter(video => video.category === category);

  if (categoryVideos.length > 0) {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'aw-video-container';

    categoryVideos.forEach(video => {
      const videoElement = document.createElement('video');
      videoElement.controls = true;
      videoElement.src = video.url;

      const videoTitle = document.createElement('p');
      videoTitle.textContent = video.title;

      const videoDiv = document.createElement('div');
      videoDiv.className = 'aw-video';
      videoDiv.appendChild(videoElement);
      videoDiv.appendChild(videoTitle);

      videoContainer.appendChild(videoDiv);
    });

    mainContent.appendChild(videoContainer);
  } else {
    mainContent.innerHTML = '<p>Video not found。</p>';
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('aw-hidden');
}

function toggleDropdown(element) {
  const dropdownContent = element.nextElementSibling;
  if (dropdownContent.style.maxHeight) {
    dropdownContent.style.maxHeight = null;
  } else {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
  }
}
