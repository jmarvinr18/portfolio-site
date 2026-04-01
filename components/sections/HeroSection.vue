<script setup lang="ts">
const phrases = [
  'securing the software supply chain.',
  'building hardened CI/CD pipelines.',
  'automating compliance at scale.',
  'threat modeling cloud infrastructure.',
  'shifting security left.',
]

const typedText = ref('')
const phraseIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

let typingTimer: ReturnType<typeof setTimeout> | null = null

function tick() {
  const current = phrases[phraseIndex.value]

  if (!isDeleting.value) {
    typedText.value = current.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === current.length) {
      isDeleting.value = true
      typingTimer = setTimeout(tick, 2000)
      return
    }
  } else {
    typedText.value = current.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      phraseIndex.value = (phraseIndex.value + 1) % phrases.length
    }
  }

  typingTimer = setTimeout(tick, isDeleting.value ? 45 : 75)
}

onMounted(() => { typingTimer = setTimeout(tick, 800) })
onUnmounted(() => { if (typingTimer) clearTimeout(typingTimer) })
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-bg" aria-hidden="true" />
    <div class="hero-glow" aria-hidden="true" />

    <div class="hero-inner">
      <!-- Left: Text content -->
      <div>
        <span class="hero-label">// hello world</span>
        <h1 class="hero-name">Jose Marvin Ramoda</h1>
        <p class="hero-title">DevSecOps Engineer &amp; Software Developer</p>
        <p class="hero-tagline">
          <span class="typed-text">{{ typedText }}</span><span class="cursor" aria-hidden="true">_</span>
        </p>
        <div class="hero-actions">
          <a href="#experience" class="btn btn-accent">View Work</a>
          <a href="/resume.pdf" class="btn btn-outline-accent" target="_blank" rel="noopener">Download CV</a>
        </div>
        <div class="hero-scroll" aria-hidden="true">
          <i class="bi-arrow-down" />
          <span>Scroll</span>
        </div>
      </div>

      <!-- Right: Terminal placeholder -->
      <div class="hero-terminal" aria-hidden="true">
        <div class="hero-terminal-bar">
          <div class="d-flex gap-1">
            <span class="terminal-dot" style="background: #ef4444" />
            <span class="terminal-dot" style="background: #f59e0b" />
            <span class="terminal-dot" style="background: #22c55e" />
          </div>
          <span class="hero-terminal-title">bash — jmarvin@devsecops</span>
        </div>
        <div class="hero-terminal-body">
          <div>
            <span class="t-prompt">jmarvin@devsecops:~$</span>
            <span class="t-cmd"> whoami</span>
          </div>
          <div class="t-output t-success">Jose Marvin Ramoda — DevSecOps Engineer</div>
          <br>
          <div>
            <span class="t-prompt">jmarvin@devsecops:~$</span>
            <span class="t-cmd"> git status</span>
          </div>
          <div class="t-output t-success">✓ all security checks passed</div>
          <div class="t-output t-success">✓ no vulnerabilities detected</div>
          <div class="t-output t-success">✓ compliance gates: OK</div>
          <br>
          <div>
            <span class="t-prompt">jmarvin@devsecops:~$</span>
            <span class="t-cmd"> kubectl get pods -n prod</span>
          </div>
          <div class="t-output t-muted">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS</div>
          <div class="t-output">api-deploy-6d4f9b&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-success">1/1</span>&nbsp;&nbsp;&nbsp;&nbsp;Running</div>
          <div class="t-output">worker-7c8d9f-m3q1&nbsp;&nbsp;<span class="t-success">1/1</span>&nbsp;&nbsp;&nbsp;&nbsp;Running</div>
          <br>
          <div>
            <span class="t-prompt">jmarvin@devsecops:~$</span>
            <span class="t-cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
