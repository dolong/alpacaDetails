// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Send back to the popup a sorted deduped list of valid link URLs on this page.
// The popup injects this script into all frames in the active tab.

var links = [].slice.apply(document.getElementsByTagName('img'));
links = links.map(function(element) {
  // Return an anchor's src attribute, stripping any URL fragment (hash '#').
  // If the html specifies a relative path, chrome converts it to an absolute
  // URL.
  var src = element.src;
  var hashIndex = src.indexOf('#');
  if (hashIndex >= 0) {
    src = src.substr(0, hashIndex);
  }
  console.log(src)
  return src;
});

links.sort();

// Remove duplicates and invalid URLs.
var kBadPrefix = 'javascript';
for (var i = 0; i < links.length;) {
  if (((i > 0) && (links[i] == links[i - 1])) ||
      (links[i] == '') ||
      (kBadPrefix == links[i].toLowerCase().substr(0, kBadPrefix.length)) || 
      (links[i].indexOf("d2jscuii") == -1)) {
    links.splice(i, 1);
  } else {
    ++i;
  }
}


chrome.extension.sendRequest(links);
