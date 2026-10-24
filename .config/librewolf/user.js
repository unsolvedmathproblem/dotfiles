// Smoothfox: ZEN SMOOTH SCROLLING (Betterfox v152)
// Source: https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Apply only this scrolling preset, not the whole Smoothfox.js file.
// Place in LibreWolf's active PROFILE folder (beside prefs.js), NOT chrome/.
// Before using: back up any existing user.js and merge instead of replacing it.
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15");
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");
user_pref("mousewheel.min_line_scroll_amount", 10);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("mousewheel.default.delta_multiplier_y", 200);
