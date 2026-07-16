// ===================== CUSTOMIZE PANEL =====================
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    initCustomizePanel();
});

const DEFAULTS = {
    theme: 'light',
    accent: 'teal',
    radius: 'rounded',
    fontsize: 'default'
};

const ACCENT_MAP = {
    teal: '#0B3954',
    ocean: '#0077B6',
    emerald: '#2D6A4F',
    violet: '#5A189A',
    rose: '#9B2226',
    amber: '#BC6C25',
    slate: '#495057',
    brand: '#17BEBB'
};

// ===================== LOAD SAVED PREFERENCES =====================
function loadPreferences() {
    const saved = JSON.parse(localStorage.getItem('shobz customization') || '{}');
    const theme = saved.theme || DEFAULTS.theme;
    const accent = saved.accent || DEFAULTS.accent;
    const radius = saved.radius || DEFAULTS.radius;
    const fontsize = saved.fontsize || DEFAULTS.fontsize;

    applyTheme(theme);
    applyAccent(accent);
    applyRadius(radius);
    applyFontSize(fontsize);
}

function savePreferences() {
    const prefs = {
        theme: document.documentElement.getAttribute('data-theme') || DEFAULTS.theme,
        accent: document.documentElement.getAttribute('data-accent') || DEFAULTS.accent,
        radius: document.documentElement.getAttribute('data-radius') || DEFAULTS.radius,
        fontsize: document.documentElement.getAttribute('data-fontsize') || DEFAULTS.fontsize
    };
    localStorage.setItem('shobz customization', JSON.stringify(prefs));
}

// ===================== APPLY FUNCTIONS =====================
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    updateThemeButtons(theme);
}

function applyAccent(accent) {
    document.documentElement.setAttribute('data-accent', accent);
    updateSwatchButtons(accent);
}

function applyRadius(radius) {
    document.documentElement.setAttribute('data-radius', radius);
    updateRadiusButtons(radius);
}

function applyFontSize(fontsize) {
    document.documentElement.setAttribute('data-fontsize', fontsize);
    updateFontSizeButtons(fontsize);
}

// ===================== UI UPDATES =====================
function updateThemeButtons(active) {
    document.querySelectorAll('.customize-theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === active);
    });
}

function updateSwatchButtons(active) {
    document.querySelectorAll('.customize-swatch').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.accent === active);
    });
}

function updateRadiusButtons(active) {
    document.querySelectorAll('.customize-radius-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.radius === active);
    });
}

function updateFontSizeButtons(active) {
    document.querySelectorAll('.customize-fontsize-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.fontsize === active);
    });
}

// ===================== PANEL INIT =====================
function initCustomizePanel() {
    const fab = document.getElementById('customizeFab');
    const panel = document.getElementById('customizePanel');
    const overlay = document.getElementById('customizeOverlay');
    const closeBtn = document.getElementById('customizeClose');
    const resetBtn = document.getElementById('customizeReset');

    if (fab) fab.addEventListener('click', () => openPanel());
    if (closeBtn) closeBtn.addEventListener('click', () => closePanel());
    if (overlay) overlay.addEventListener('click', () => closePanel());

    // Theme buttons
    document.querySelectorAll('.customize-theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyTheme(btn.dataset.theme);
            savePreferences();
        });
    });

    // Accent swatches
    document.querySelectorAll('.customize-swatch').forEach(btn => {
        btn.addEventListener('click', () => {
            applyAccent(btn.dataset.accent);
            savePreferences();
        });
    });

    // Radius buttons
    document.querySelectorAll('.customize-radius-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyRadius(btn.dataset.radius);
            savePreferences();
        });
    });

    // Font size buttons
    document.querySelectorAll('.customize-fontsize-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyFontSize(btn.dataset.fontsize);
            savePreferences();
        });
    });

    // Reset
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            applyTheme(DEFAULTS.theme);
            applyAccent(DEFAULTS.accent);
            applyRadius(DEFAULTS.radius);
            applyFontSize(DEFAULTS.fontsize);
            savePreferences();
        });
    }
}

function openPanel() {
    document.getElementById('customizePanel')?.classList.add('open');
    document.getElementById('customizeOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    document.getElementById('customizePanel')?.classList.remove('open');
    document.getElementById('customizeOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
}
