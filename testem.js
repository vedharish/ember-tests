/*jshint node:true*/
module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "on_start": "start-BrowserStackLocal async",
  "on_exit": "stop-BrowserStackLocal",
  "timeout": 60000,
  "browser_start_timeout": 600000,
  "browser_disconnect_timeout": 600000,
  "launch_in_ci": [
    "bs_win_7_ie_11",
    "bs_win_7_ie_10",
    "bs_win_7_ie_9"
  ],
  "launchers": {
    "bs_win_7_ie_11": {
      "command": "run_on_browserstack --os Windows --os_version 7 --browser ie --browser_version 11 --url <url> --logLevel silly --tunnel --build build",
      "protocol": "browser"
    },
    "bs_win_7_ie_10": {
      "command": "run_on_browserstack --os Windows --os_version 7 --browser ie --browser_version 10 --url <url> --tunnel --logLevel silly --build build",
      "protocol": "browser"
    },
    "bs_win_7_ie_9": {
      "command": "run_on_browserstack --os Windows --os_version 7 --browser ie --browser_version 9 --url <url> --logLevel silly --tunnel --build build",
      "protocol": "browser"
    },
    "bs_win_7_ie_8": {
      "command": "run_on_browserstack --os Windows --os_version 7 --browser ie --browser_version 8 --url <url> --logLevel silly --tunnel --build build",
      "protocol": "browser"
    }
  },
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ]
};
