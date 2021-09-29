import $ from 'cash-dom';
import {Tooltip} from 'bootstrap';
import { ucfirst } from './utils/Strings';
import { debounce } from './utils/Events';

const svgPanZoom = require('svg-pan-zoom');

const enabled = !!document.querySelector('#svgMap');

const SvgMap = {
    enabled: enabled
};
if(enabled){
        
    // fix attributes
    var world = document.getElementsByTagName(".svg-map path");
    for (var i = 0; i < world.length; i++) {
        var country = world[i];
        country.setAttribute("data-toggle", "tooltip");
        country.setAttribute("data-placement", "top");
        country.setAttribute("title", country.getAttribute("id"));
    }

    // setup tooltips
    /** @type {Element[]} */
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        
        const title = tooltipTriggerEl.getAttribute('data-name');
        const marked = tooltipTriggerEl.hasAttribute('data-marked');
        if(title && marked){
            tooltipTriggerEl.setAttribute('title', ucfirst(title));
            return new Tooltip(tooltipTriggerEl);
        }
        return null;
    });


    // initialize zoom in animation 
    const map = svgPanZoom('#svgMap', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        dblClickZoomEnabled: false,
        mouseWheelZoomEnabled: false,
        preventMouseEventsDefault: false,
        fit: true,
        center: true,
        // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
    });

    // document.getElementById('enable').addEventListener('click', function() {
    // map.enableControlIcons();
    // })
    // document.getElementById('disable').addEventListener('click', function() {
    // map.disableControlIcons();
    // })


    $(".map-radios input").on('change', e =>{
        const $checked = $(".map-radios input:checked");
        const value = $checked.val();
        console.log(value);
        const methodname = String(value).toLocaleLowerCase();
        if(SvgMap.zoomTo[methodname]){
            SvgMap.zoomTo[methodname]();
        }
    });

    window.addEventListener('resize',debounce(()=>{
        map.updateBBox();
        map.resize();
        map.contain();
        map.center();
        $(".map-radios input:checked").prop('checked',false);
        console.log('resize');
    },100),{passive: true});

    function calcScale(s){
        var scale = window.innerWidth / 1400;
        return s * scale;
    }

    SvgMap.map = map;
    SvgMap.zoomTo = {
        americas(){
            map.resetZoom();
            map.center();
            map.zoomAtPoint(1.8, {x: calcScale(50), y: calcScale(50)});
        },
        europe(){
            map.resetZoom();
            map.center();
            map.zoomAtPoint(2.2, {x: calcScale(650), y: calcScale(150)});
        },
        africa(){
            map.resetZoom();
            map.center();
            map.zoomAtPoint(2.2, {x: calcScale(650), y: calcScale(450)});
        },
        australia(){
            map.resetZoom();
            map.center();
            map.zoomAtPoint(2.2, {x: calcScale(1390), y: calcScale(690)});
        },
        middleeast(){
            map.resetZoom();
            map.center();
            map.zoomAtPoint(2.2, {x: calcScale(790), y: calcScale(440)});
        },
        asiapacific(){
            map.resetZoom();
            map.center();
            map.zoomAtPoint(2, {x: calcScale(1000), y: calcScale(300)});
        }
    };


    SvgMap.tooltipList = tooltipList;

}
window.SvgMap = SvgMap;
export default SvgMap;