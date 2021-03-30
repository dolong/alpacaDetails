// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This extension demonstrates using chrome.downloads.download() to
// download URLs.

var allLinks = [];
var visibleLinks = [];



// Download all visible checked links.
function alpacaBounce() {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'alpacaBounce.js', allFrames: true});
    });
  });  
}


// Download all visible checked links.
function alpacaTreasureIsland() {
  console.log("launched TI")
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'alpacaTreasureIsland.js', allFrames: true});
    });
  });  
}

window.onload = function() {
  document.getElementById('launchBounce').onclick = alpacaBounce;
  document.getElementById('launchTI').onclick = alpacaTreasureIsland;

};