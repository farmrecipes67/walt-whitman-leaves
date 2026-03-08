'use strict';

/**
 * walt-whitman-leaves
 * An npm package inspired by Walt Whitman
 * An npm package inspired by Walt Whitman — generates expansive, free-verse celebrations of democracy, nature, and the human body.
 */

const poems = [
  "This is a placeholder poem in the style of Walt Whitman.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Walt Whitman
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
