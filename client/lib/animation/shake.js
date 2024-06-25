/* global gsap */

export function shake(target) {
  const animation = gsap.to(target, {
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });

  return animation;
}
