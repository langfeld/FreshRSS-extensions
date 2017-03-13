<?php

class TouchControlExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js', '', 'async'));
        Minz_View::appendScript($this->getFileUrl('doubletap.js', 'js', 'defer', ''));
        Minz_View::appendScript($this->getFileUrl('detectswipe.js', 'js', 'defer', ''));        
        Minz_View::appendScript($this->getFileUrl('script.js', 'js', 'defer', ''));  
    }

}
