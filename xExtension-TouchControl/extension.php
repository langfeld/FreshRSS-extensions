<?php

class TouchControlExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js'),'',false);
        Minz_View::appendScript($this->getFileUrl('doubletap.js', 'js'),'',false);
        Minz_View::appendScript($this->getFileUrl('detectswipe.js', 'js'),'',false);        
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'),'',false);   
    }

}
