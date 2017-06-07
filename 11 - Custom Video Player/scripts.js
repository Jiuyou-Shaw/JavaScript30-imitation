const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggleBtn = player.querySelector(".toggle");
const progress= player.querySelector(".progress");
const progressBar = player.quertSelector(".progress-field");
const ranges = player.querySelectorAll(".player-slider");
const skipBtns = player.querySelector("[data-skip]")

function togglePlay() {
    const method = video.paused ? "play" : "pause"
    video[method]();
}

function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggleBtn.textContext = icon;
}

function handleProgress() {
    const persent = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${persent}%`;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function skipProgress() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrupTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
vide.addEventListener("pause", updateBtn);
vide.addEventListener("timeupdate", handleProgress);

toggleBtn.addEventListener("click", togglePlay);

ranges.forEach(range => range.addEventlistener("mousemove", handleRangeUpdate));
ranges.forEach(range => range.addEventlistener("change", handleRangeUpdate));

skipBtns.forEach(skipBtn => skipBtn.addEventListener("click", skipProgress));

progress.addEventListener("click", scrub);