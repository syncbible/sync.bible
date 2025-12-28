import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

// Read version from manifest.json
const manifest = JSON.parse(readFileSync('./public/manifest.json', 'utf8'));
const manualVersion = manifest.version;

// Get git commit hash (short version)
let cacheVersion;
try {
	const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
	cacheVersion = `sync.bible.${ manualVersion }.${ gitHash }`;
} catch (error) {
	// Fallback to timestamp if not in git repo
	cacheVersion = `sync.bible.${ manualVersion }.${ Date.now() }`;
}

console.log(`Updating cache version to: ${ cacheVersion }`);

// Update service worker
const swPath = './public/sw.js';
let swContent = readFileSync(swPath, 'utf8');
swContent = swContent.replace(
	/const CACHE_VERSION = ['"][^'"]*['"];/,
	`const CACHE_VERSION = '${ cacheVersion }';`
);
writeFileSync(swPath, swContent);

// Update actions file
const actionsPath = './src/actions/index.js';
let actionsContent = readFileSync(actionsPath, 'utf8');
actionsContent = actionsContent.replace(
	/const cacheKey = ['"][^'"]*['"];/,
	`const cacheKey = '${ cacheVersion }';`
);
writeFileSync(actionsPath, actionsContent);

console.log('✓ Cache version updated successfully');
