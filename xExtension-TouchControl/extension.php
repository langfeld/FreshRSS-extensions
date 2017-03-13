<?php

class TouchControlExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js', false, true));
        Minz_View::appendScript($this->getFileUrl('doubletap.js', 'js', true, false));
        Minz_View::appendScript($this->getFileUrl('detectswipe.js', 'js', true, false));        
        Minz_View::appendScript($this->getFileUrl('script.js', 'js', true, false));  
    }

}
