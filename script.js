window.onload = function() {
    const overlay = document.getElementById('welcomeOverlay');
    
    let refreshCount = sessionStorage.getItem('refreshCount');

    if (refreshCount === null) {

        overlay.style.display = 'flex';
        sessionStorage.setItem('refreshCount', '1');
    } else {
        refreshCount = parseInt(refreshCount);
        
        if (refreshCount >= 2) {
            overlay.style.display = 'flex';
            sessionStorage.setItem('refreshCount', '1');
        } else {
            overlay.style.display = 'none';
            sessionStorage.setItem('refreshCount', (refreshCount + 1).toString());
        }
    }
};

function closeOverlay() {
    const overlay = document.getElementById('welcomeOverlay');
    overlay.style.display = 'none';
}


function openVideo(playlistId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    const content = document.getElementById('modalContent');

    modal.classList.remove('modal-minimized-bg');
    content.classList.remove('minimized');
    
    iframe.src = "https://www.youtube.com/embed/videoseries?list=" + playlistId + "&autoplay=1";
    modal.style.display = "block";
}

function toggleMinimize() {
    const modal = document.getElementById('videoModal');
    const content = document.getElementById('modalContent');
    
    content.classList.toggle('minimized');
    modal.classList.toggle('modal-minimized-bg');
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    modal.style.display = "none";
    iframe.src = "";
}