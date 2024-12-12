class SoundManager {
  constructor() {
    this.sounds = {};
  }

  load(name, src) {
    const audio = new Audio(src);
    audio.muted = true;
    audio.play().catch(() => {});
    audio.muted = false;
    this.sounds[name] = audio;
  }

  play(name) {
    const sound = this.sounds[name];
    if (sound) {
      sound.currentTime = 0;
      sound
        .play()
        .catch((error) =>
          console.error(`Error playing sound "${name}":`, error)
        );
    } else {
      console.warn(`Sound "${name}" not found.`);
    }
  }
}

const soundManager = new SoundManager();

export default soundManager;
