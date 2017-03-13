<?php

class TouchControlExtension extends Minz_Extension {

    public function init() {
        echo "<script src='" . $this->getFileUrl('jquerymin.js', 'js') . "'></script>";
        Minz_View::appendScript($this->getFileUrl('doubletap.js', 'js'));
        Minz_View::appendScript($this->getFileUrl('detectswipe.js', 'js'));        
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'));   
    }

}
