var imageOps = {
  pure: {
    isSquareOrPortrait: function(imgNode) {
      return imgNode.height >= imgNode.width;
    }
  },

  impure: {
    unwrap: function() {
      var foo = $("p > img").unwrap();
    },

    createInlinedContainer: function(imgA, imgB) {
      var bodyWidth =
        document.DO_PAGEWIDTH ||
        document.querySelector("body").getBoundingClientRect().width;
      var imgAPath = imgA.src;
      var imgBPath = imgB.src;
      var container = document.createElement("div");
      container.classList.add("inline-img-wrapper");
      var imgAElem = document.createElement("img");
      imgAElem.id = imgA.id;
      imgAElem.src = imgAPath;
      imgAElem.style.background = 'url("' + imgAPath + '")';
      imgAElem.setAttribute("onclick", "imageTapped('" + imgA.id + "')");
      imgAElem.classList.add("inline-img");
      var imgBElem = document.createElement("img");
      imgBElem.id = imgB.id;
      imgBElem.src = imgBPath;
      imgBElem.style.background = 'url("' + imgBPath + '")';
      imgBElem.setAttribute("onclick", "imageTapped('" + imgB.id + "')");
      imgBElem.classList.add("inline-img");
      var ratio = 3 / 2; // Portrait
      container.style.height = ratio * (bodyWidth / 2) + "px";
      container.appendChild(imgAElem);
      container.appendChild(imgBElem);
      return container;
    },

    markLargeImages: function() {
      // Get all images on page
      var nodes = document.querySelectorAll("img");
      var allImages = Array.prototype.slice.call(nodes, 0);

      // Get only large images
      var largeImages = allImages.filter(function(node) {
        return node.naturalWidth >= 500;
      });

      largeImages.forEach(function(node) {
        node.classList.add("large-image");
      });
    },

    limitImageHeight: function() {
      var bodyWidth =
        document.DO_PAGEWIDTH ||
        document.querySelector("body").getBoundingClientRect().width;
      var maxHeight = bodyWidth;
      var nodes = $("img:not(.inline-img)");
      var isTallerThanMaxHeight = function(node) {
        return node.naturalHeight > bodyWidth;
      };
      var isPortrait = function(node) {
        return node.naturalWidth < node.naturalHeight;
      };
      var allImages = Array.prototype.slice.call(nodes, 0);

      var portraitImages = allImages.filter(function(node) {
        return isTallerThanMaxHeight(node) && isPortrait(node);
      });

      portraitImages.forEach(function(node) {
        node.style.maxHeight = maxHeight + "px";
        node.style.width = "auto";
        node.style.margin = "0 auto";
      });
    },

    makeSideBySide: function() {
      function go(visitedImages) {
        // Get all images on page
        var nodes = document.querySelectorAll(".large-image");
        var allImages = Array.prototype.slice.call(nodes, 0);

        // Ignore those which have already been visited
        var unvisited = allImages.filter(function(i) {
          return !visitedImages.includes(i);
        });

        // If we've visited everything, we're done!
        if (unvisited.length == 0) {
          return;
        }

        // Get the image to operate on, and its immediate sibling image
        var img = unvisited[0];
        var nextImg = img.nextElementSibling;

        // If img doesn't have a sibling, move along
        if (nextImg == null) {
          return go(visitedImages.concat(img));
        }

        // If the two aren't inlinable, add the first to the visited list and move on
        if (
          nextImg.tagName != "IMG" ||
          !imageOps.pure.isSquareOrPortrait(img) ||
          !imageOps.pure.isSquareOrPortrait(nextImg)
        ) {
          return go(visitedImages.concat(img));
        }

        // Otherwise, remove the next image from the dom,
        // and replace the current image with a div containing
        // the magic inlined image markup
        var inlined = imageOps.impure.createInlinedContainer(img, nextImg);
        nextImg.parentNode.removeChild(nextImg);
        img.parentNode.replaceChild(inlined, img);

        // Looooooop!
        return go(visitedImages.concat(img, nextImg));
      }

      go([]);
    },

    unindentMedia: function() {
      var iframes = document.getElementsByTagName("iframe");

      for (var i = 0; i < iframes.length; ++i) {
        var wrapper = document.createElement("div");
        wrapper.classList.add("media_embed");
        var iframe = iframes[i];
        if (iframe.src && iframe.src.indexOf("youtube") !== -1) {
          wrapper.classList.add("youtube");
        }
        if (iframe.src && iframe.src.indexOf("vimeo") !== -1) {
          wrapper.classList.add("vimeo");
        }
        wrapper.appendChild(iframe.cloneNode(true));
        iframe.parentNode.replaceChild(wrapper, iframe);
        $("iframe").wrap("<p></p>");
      }
    },

    resizeVideos: function() {
      var videoContainers = $(
        ".media_embed.youtube iframe, .media_embed.vimeo iframe"
      );
      var bodyWidth = document.querySelector("body").getBoundingClientRect()
        .width;

      videoContainers.height(bodyWidth * (9 / 16));
    }
  }
};

/* wrapPrintHeaders hackily simulates the behavior that we should get (but don't seem to be getting)
with page-break-after: avoid; */
function wrapPrintHeaders() {
  /* We want to keep page breaks from happening between headers and the content immediately follow-
  ing. We reverse the list of headers after selecting it, so that sub-headers are grouped with their
  content before their super-headers get grouped. If you try this without reversing, and you have
  two headers in a row, the second two headers will get grouped together, and the associated content
  will be left ungrouped. */
  var nodes = $(
    $(
      ".entry .header, .entry h1, .entry h2, .entry h3, .entry h4, .entry h5, .entry h6"
    )
      .not(".header h1")
      .get()
      .reverse()
  );

  nodes.each(function(_, node) {
    // Use add this random color as a border to the breakerTag when
    // you want to visually debug what the breakers are doing.
    // var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var breakerTag =
      "<div class='break-breaker' style='page-break-inside: avoid'/>";
    $(node).next().andSelf().wrapAll(breakerTag);
  });

  /* Also, we want to keep the tags at the end of the entry from ending up all alone on a page */
  $(".tags").toArray().forEach(function(tags) {
    $(tags).prev().andSelf().wrapAll(breakerTag);
  });
}

function destoryIFrames() {
  $("iframe").remove();
}

function markLinksForWhichToShowURL() {
  $("a:not(:contains(http))").addClass("showURL");
}

function removeMarginFromFirstChildren() {
  function go(node) {
    if (node == null) return;
    node.style.marginTop = "0px";
    // Images should but right up to the top, though. This number correlates
    // with the css rule for the body padding in day-one-ios-override.css
    if (node.tagName == "IMG") {
      node.style.marginTop = "-1.2em";
    }
    var children = $(node).find(":not(script):not(style)");
    if (children.length == 0) return;
    go(children[0]);
  }

  var mainNode = $("#body")[0];
  go(mainNode);
}

function DOMain() {
  const VIEW_MODE = $(body).attr("do-view-mode");
  const PLATFORM = $(body).attr("do-platform");
  // Order matters here, we're mutating the DOM!
  imageOps.impure.unwrap();
  imageOps.impure.markLargeImages();
  imageOps.impure.makeSideBySide();
  imageOps.impure.unindentMedia();
  imageOps.impure.resizeVideos();
  window.addEventListener("resize", imageOps.impure.resizeVideos);

  if (VIEW_MODE == "read-single" && PLATFORM == "ios") {
    removeMarginFromFirstChildren();
  }

  if (VIEW_MODE == "print") {
    markLinksForWhichToShowURL();
    imageOps.impure.limitImageHeight();
    wrapPrintHeaders();
    destoryIFrames();
  }

  if (document.DO_SCROLLTOPOSITION > 0) {
    scrollTo(0, document.DO_SCROLLTOPOSITION);
  }
}

window.addEventListener("load", DOMain);
