
/**
 * Run init to start
 */

// Default Settings
var settings = {
    area: "",
    color: "rgba(255, 255, 255, 0.4)",
    offsetEl: null,
    eventListener: "click",
    mouseMove: false
};

/**
 * @description Where the magic happens
 * @param {object} e
 * @param {string} rippleColor
 * @param {string} eventListener
 */
function ripple(e, rippleColor, eventListener) {
    var clickedEl = e.currentTarget;
    var PageX = eventListener.match(/touch/) ? e.changedTouches[0].pageX : e.clientX;
    var PageY = eventListener.match(/touch/) ? e.changedTouches[0].pageY : e.clientY;
    var btnWidth = clickedEl.clientWidth;
    var el = clickedEl.getBoundingClientRect();
    var rippleOffset = settings.offsetEl ? settings.offsetEl.clientHeight : 0;
    var btnOffsetTop = el.top + rippleOffset;
    var btnOffsetLeft = el.left;
    var posMouseX = PageX;
    var posMouseY = PageY + rippleOffset;
    var rippleX = posMouseX - btnOffsetLeft;
    var rippleY = posMouseY - btnOffsetTop;

    var baseCSS = "\n          position: absolute;\n          width: " + btnWidth * 2 + "px;\n          height: " + btnWidth * 2 + "px;\n          border-radius: 50%;\n          transition: transform 700ms, opacity 700ms;\n          transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);\n          background: " + rippleColor + ";\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: 100%;\n          left: " + (rippleX - btnWidth) + "px;\n          top: " + (rippleY - btnWidth) + "px;\n          transform: scale(0);\n          pointer-events: none;\n      ";

    // Prepare the dom
    var rippleEffect = document.createElement("span");
    rippleEffect.style.cssText = baseCSS;

    // Add some css for prevent overflow errors
    clickedEl.style.overflow = "hidden";

    // Check if the element is not static because the ripple is in absolute
    if (window.getComputedStyle(clickedEl).position === "static") {
        clickedEl.style.position = "relative";
    }

    // Check for the mousemove event
    if (settings.mouseMove) {
        settings.mouseMove = false;
        return;
    }

    clickedEl.appendChild(rippleEffect);

    // start animation
    requestAnimationFrame(function () {
        rippleEffect.style.cssText = baseCSS + " transform: scale(1); opacity: 0;";
    });

    setTimeout(function () {
        rippleEffect.remove();
    }, 700);
}

/**
 * @description Prevent ripple when scrolling (Mobile Only)
 * @param {string} eventListener
 */
function onDrag(eventListener) {
    if (eventListener === "touchend") {
        document.getElementsByTagName("body")[0].addEventListener("touchmove", function () {
            settings.mouseMove = true;
        });
    }
}

function attachRipple(els, rippleColor, eventListener) {
    for (var i = 0; i < els.length; i += 1) {
        var currentBtn = els[i];
        currentBtn.addEventListener(eventListener, function (e) {
            return ripple(e, rippleColor, eventListener);
        });
    }
}

function attachRippleToAttribute(area, rippleColor, eventListener) {
    var attributeEl = document.querySelectorAll(area + " [data-ripple]");

    if (attributeEl.length > 0) {
        attachRipple(attributeEl, rippleColor, eventListener);
    } else {
        throw new Error('not found any element with data-ripple');
    }
}

function attachRippleToSelectors(selectors, rippleColor, eventListener) {
    if (selectors) {
        var selectorsEl = document.querySelectorAll(selectors);
    } else {
        throw new Error("You have to enter at least 1 selector");
    }

    if (selectorsEl.length > 0) {
        attachRipple(selectorsEl, rippleColor, eventListener);
    } else {
        console.warn("No element found with this selector: ", selectors);
    }
}

var mripple = {
    init: function init() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        try {
            var area = settings.area,
                color = settings.color,
                offsetEl = settings.offsetEl,
                eventListener = settings.eventListener;


            area = data.area || area;
            color = data.color || color;
            offsetEl = data.offsetEl ? this.setOffsetEl(data.offsetEl) : offsetEl;
            eventListener = data.eventListener || eventListener;

            onDrag(eventListener);
            attachRippleToAttribute(area, color, eventListener);
        } catch (e) {
            console.warn(e.message);
        }
    },
    attachToSelectors: function attachToSelectors() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        try {
            var elSetting = {
                color: data.color || settings.color,
                eventListener: data.eventListener || settings.eventListener
            };
            var color = elSetting.color,
                eventListener = elSetting.eventListener;


            attachRippleToSelectors(data.selectors, color, eventListener);
        } catch (e) {
            console.warn(e.message);
        }
    },
    setOffsetEl: function setOffsetEl(el) {
        settings.offsetEl = document.querySelector(el);
    },

    ripple: ripple
};


export default mripple;